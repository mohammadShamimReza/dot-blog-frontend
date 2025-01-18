"use client";

import { useUser } from "@/lib/UserProvider";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";

interface SignupFormProps {
  onSubmit: (data: any) => void;
}

interface ErrorType {
  response: {
    statusCode: number;
    message: string;
    errorMessages: string;
  };
}

const SignupForm: React.FC = () => {
  const [createUser] = useCreateUserMutation();
  const router = useRouter();
  const { setUser } = useUser();

  // States for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  // Validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    designation: yup.string().required("Designation is required"),
    experience: yup.string().required("Experience is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Please re-enter your password"),
    phone: yup.string().required("Phone number is required"),
    terms: yup.boolean().oneOf([true], "Terms and Conditions must be accepted"),
  });

  const { control, handleSubmit, watch, setValue, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSignup = async (data: any) => {
    delete data.terms;
    delete data.repassword;

    data.role = "user";

    try {
      const result = await createUser({ ...data }).unwrap();

      if (result?.data?.accessToken) {
        toast.success("Sign up successful", {
          style: { border: "1px solid black" },
        });
        storeUserInfo({ accessToken: result?.data?.accessToken });
        const { role, id } = getUserInfo() as any;

        setUser({ role, id });
        router.push(`/profile/${id}`);

        reset();
      } else {
        toast.error("Sign up failed", { style: { border: "1px solid black" } });
      }
    } catch (error) {
      const specificError = error as ErrorType;
      const logError = specificError?.response;
      toast.error(`${logError?.errorMessages} Email or number already used`, {
        style: { border: "1px solid black" },
      });
    }
  };

  const toggleTermsCheckbox = () => {
    setValue("terms", !watch("terms"));
  };

  const { errors } = formState;

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md m-auto p-6 rounded-lg border mb-40">
          <h1 className="text-2xl text-center mb-4 font-semibold">Sign Up</h1>
          <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full border p-2 rounded-md"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            {/* Designation */}
            <div>
              <label className="block text-sm text-gray-600">
                Work Designation
              </label>
              <Controller
                name="designation"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full border p-2 rounded-md"
                  />
                )}
              />
              {errors.designation && (
                <p className="text-red-500 text-xs">
                  {errors.designation.message}
                </p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm text-gray-600">
                Work Experience
              </label>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="w-full border p-2 rounded-md"
                  />
                )}
              />
              {errors.experience && (
                <p className="text-red-500 text-xs">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    className="w-full border p-2 rounded-md"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm text-gray-600">Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className="w-full border p-2 rounded-md pr-10"
                  />
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Recheck Password */}
            <div className="relative">
              <label className="block text-sm text-gray-600">
                Recheck Password
              </label>
              <Controller
                name="repassword"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type={showRePassword ? "text" : "password"}
                    className="w-full border p-2 rounded-md pr-10"
                  />
                )}
              />
              <button
                type="button"
                onClick={() => setShowRePassword(!showRePassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                {showRePassword ? "🙈" : "👁️"}
              </button>
              {errors.repassword && (
                <p className="text-red-500 text-xs">
                  {errors.repassword.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600">
                Phone Number
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full border p-2 rounded-md"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>

            {/* Terms */}
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  checked={watch("terms")}
                  onChange={toggleTermsCheckbox}
                  className=""
                />
                <label className="text-sm ml-2">
                  I agree to the terms and conditions
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-xs">{errors.terms.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-gray-300 dark:bg-gray-600 font-bold p-2 rounded-md w-full dark:hover:bg-slate-500 hover:bg-gray-400"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-right pt-4 text-left">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="font-bold underline hover:text-gray-500 hover:dark:text-gray-300"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
