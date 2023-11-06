import { useUpdateUserMutation, useUsersByIdQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { IBlog } from "@/types";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Layout from "../../components/Layouts/Layout";
import MyBlogs from "./MyBlogs";

const ProfileData = () => {
  const { control, handleSubmit, setValue, getValues } = useForm();

  const [profileEditable, setProfileEditable] = useState(false);
  const { id, role, email } = getUserInfo() as any;
  const { data: userData, isLoading } = useUsersByIdQuery(id);
  const UserProfileData = userData;
  const [updateUser, { data, isError }] = useUpdateUserMutation(id);

  const onSubmit = async (data: any) => {
    try {
      const result = await updateUser({ id: id, body: data });
      if (result) {
        toast("Profile update successfully", {
          style: {
            border: "1px solid black",
          },
        });
      }
    } catch (error) {
      toast.error("server error", {
        style: {
          border: "1px solid black",
        },
      });
    }
    setProfileEditable(false);
    // Handle the form data, e.g., send it to the server
  };

  useEffect(() => {
    if (UserProfileData) {
      setValue("name", UserProfileData?.name);
      setValue("designation", UserProfileData?.designation);
      setValue("experience", UserProfileData?.experience);
      setValue(
        "linkedIn",
        !UserProfileData?.linkedIn
          ? "https://www.linkedin.com/"
          : UserProfileData?.linkedIn
      );
      setValue(
        "github",
        !UserProfileData?.github
          ? "https://github.com"
          : UserProfileData?.github
      );
    }
  }, [UserProfileData, setValue]);

  return (
    <div className="rounded-lg overflow-hidden max-w-2xl mx-auto dark:bg-gray-800 bg-white border">
      <Toaster />
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-full h-96 object-cover"
      />
      <div className="p-4 ">
        <div className="mb-2 text-2xl font-semibold flex gap-2 items-center">
          {profileEditable ? (
            <div className="">
              <p className="text-2xl">Name</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="font-semibold text-2xl border dark:border-none rounded-lg"
                    />
                  )}
                />
              </form>
            </div>
          ) : (
            UserProfileData?.name
          )}
        </div>

        <div className="mb-2 flex gap-2">
          {profileEditable ? (
            <div className="">
              <p>Designation</p>{" "}
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="designation"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="border dark:border-none rounded-lg"
                    />
                  )}
                />
              </form>
            </div>
          ) : (
            UserProfileData?.designation
          )}
        </div>
        <div className="mt-4">
          <div className="    ">
            {" "}
            <p className="text-lg font-semibold">Experience</p>
            {profileEditable ? (
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="experience"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        rows={4}
                        className=" border dark:border-none  rounded-lg"
                      />
                    )}
                  />
                </form>
              </div>
            ) : (
              UserProfileData?.experience
            )}
          </div>
        </div>
        <br />
        <div className={profileEditable ? "mt-4 " : "mt-4 flex gap-3"}>
          {profileEditable ? (
            // Input field for LinkedIn link
            <div className="">
              {" "}
              <AiFillLinkedin className="w-6 h-6 text-blue-500" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="linkedIn"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="LinkedIn URL"
                      className="border dark:border-none rounded-lg"
                    />
                  )}
                />
              </form>
            </div>
          ) : (
            <Link
              href={UserProfileData?.linkedIn || "https://www.linkedin.com/"}
            >
              <AiFillLinkedin className="w-6 h-6 text-blue-500" />
            </Link>
          )}

          {profileEditable ? (
            // Input field for GitHub link
            <div className="">
              <AiFillGithub className="w-6 h-6 text-gray-800 dark:text-white" />

              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="github"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="GitHub URL"
                      className="border dark:border-none rounded-lg"
                    />
                  )}
                />
              </form>
            </div>
          ) : (
            <Link href={UserProfileData?.github || "https://github.com"}>
              <AiFillGithub className="w-6 h-6 text-gray-800 dark:text-white" />
            </Link>
          )}
        </div>
        <div className="flex justify-end">
          {profileEditable ? (
            <div className="">
              <button
                onClick={() => setProfileEditable(false)}
                type="submit"
                className="py-2 px-6 bg-gray-300 border rounded-lg hover:bg-gray-400 hover:text-white dark:bg-gray-500 dark:hover-bg-slate-400 dark:text-blackr"
              >
                Cancel
              </button>
              <button
                onClick={() => setProfileEditable(!profileEditable)}
                type="button"
                className="py-2 px-6 bg-gray-300 border rounded-lg hover:bg-gray-400 hover:text-white dark:bg-gray-500 dark:hover-bg-slate-400 dark:text-blackr"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={() => setProfileEditable(!profileEditable)}
              type="button"
              className="py-2 px-6 bg-gray-300 border rounded-lg hover:bg-gray-400 hover:text-white dark:bg-gray-500 dark:hover-bg-slate-400 dark:text-blackr"
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <p className="text-center font-semibold text-lg">My Blogs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center pt-10">
        {UserProfileData?.blogs.map((data: IBlog) => (
          <MyBlogs key={data.id} blog={data} />
        ))}
      </div>
    </div>
  );
};

export default ProfileData;

ProfileData.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
