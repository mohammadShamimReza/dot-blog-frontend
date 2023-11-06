"use client";

import { useUser } from "@/lib/UserProvider";
import {
  useCreateUserMutation,
  useUserLoginMutation,
} from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

interface SignupFormProps {
  onSubmit: (data: any) => void;
}

const SignupForm: React.FC = () => {
  const [createUser, { data, error, status }] = useCreateUserMutation();
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const { user, setUser } = useUser();

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    designation: yup.string().required("designation is required"),
    experience: yup.string().required("designation is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Please re-enter your password"),

    phone: yup
      .string()
      //   .matches(/^\d{10}$/, "Invalid phone number")
      .required("contactNo is required"),
    terms: yup.boolean().oneOf([true], "Terms and Conditions must be accepted"),
  });

  const { control, handleSubmit, watch, setValue, formState, setError, reset } =
    useForm({
      resolver: yupResolver(validationSchema),
    });

  const handleSignup = async (data: any) => {
    delete data.terms;
    delete data.repassword;

    data.role = "user";

    try {
      const result = await createUser({ ...data }).unwrap();

      reset({
        phone: "",
        password: "",
        email: "",
        name: "",
        designation: "",
        experience: "",
        repassword: "",
        terms: false,
      });

      if (result?.accessToken) {
        toast("Sign Up successfully", {
          style: {
            border: "1px solid black",
          },
        });

        storeUserInfo({ accessToken: result?.accessToken });
        const { role, id } = getUserInfo() as any;

        setUser({ role: role, id: id });
        router.push(`/profile${id}`);
        if (result === undefined) {
          toast.error("User not found", {
            style: {
              border: "1px solid black",
            },
          });
        }
      }
    } catch (err: any) {
      toast.error("server error", {
        style: {
          border: "1px solid black",
        },
      });
    }
  };

  const { errors } = formState;

  const isSubmitDisabled = errors.terms || formState.isSubmitting;

  const toggleTermsCheckbox = () => {
    setValue("terms", !watch("terms"));
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md m-auto p-6  rounded-lg border mb-40">
          <h1 className="text-2xl text-center mb-4 font-semibold ">Sign Up</h1>
          <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
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
            <div>
              <label className="block text-sm text-gray-600">designation</label>
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
            <div>
              <label className="block text-sm text-gray-600">experience</label>
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
            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    className="w-full border p-2 rounded-md"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-600">
                Recheck Password
              </label>
              <Controller
                name="repassword"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    className="w-full border p-2 rounded-md"
                  />
                )}
              />
              {errors.repassword && (
                <p className="text-red-500 text-xs">
                  {errors.repassword.message}
                </p>
              )}
            </div>

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
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  checked={watch("terms")}
                  onChange={toggleTermsCheckbox}
                  className=""
                />
                <label className="text-sm  ml-2">
                  I agree to the terms and conditions
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-xs">{errors.terms.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className={`${
                  isSubmitDisabled ? "bg-gray-300 cursor-not-allowed" : ""
                }  bg-gray-300 dark:bg-gray-600  font-bold p-2 rounded-md w-full dark:hover:bg-slate-500 hover:bg-gray-400`}
                disabled={isSubmitDisabled as boolean}
              >
                Sign Up
              </button>
            </div>
          </form>
          <br />
          <br />
          <div className="text-right pt-4 ">
            <div className=" text-left">
              Already have account ! Please{" "}
              <Link
                href={"/login"}
                className=" font-bold p-2 rounded-md w-full hover:text-gray-500 hover:dark:text-gray-300 text-right underline"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
