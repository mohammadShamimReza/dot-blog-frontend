import Layout from "@/components/Layouts/Layout";
import { useBlogByIdQuery } from "@/redux/api/blogApi";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { getUserInfo } from "@/services/auth.service";
import { IReview } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  text: yup.string().required("Review is required"),
});

function SingleBlog() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: blogDatas } = useBlogByIdQuery(id);
  const blogData = blogDatas?.data;
  const { id: userId } = getUserInfo() as any;
  const [createReview, { data, status }] = useCreateReviewMutation();

  const { handleSubmit, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    data.userId = userId;
    data.blogId = id;

    try {
      const result = await createReview({ ...data }).unwrap();

      reset({
        text: "",
      });
    } catch (err: any) {
      console.error(err.message, "this is error message");
    }
  };

  return (
    <div>
      <div className="flex justify-end align-middle">
        <Link href={`/profile/${userId}`}>
          <div className="">
            <Image
              src={blogData?.user?.profileImg || ""}
              height={2}
              width={2}
              alt="Writer"
              className="flex w-8 h-8 rounded-full mr-2"
            />

            <span>{blogData?.user.name}</span>
          </div>
        </Link>

        {/* <div className="">
          <br /> subscribe <MdOutlineUnsubscribe />
        </div> */}
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <div
          className="text-gray-800 mb-4 
            dark:text-gray-300 text-2xl font-semibold"
        >
          {blogData?.title}
        </div>
        <br />
        <div className="flex align-middle justify-center h-80 ">
          <Image
            src={blogData?.thumbnailImg || ""}
            height={200}
            width={200}
            alt="Writer"
            className=" rounded-lg"
            layout="responsive"
          />
        </div>

        <br />
        <div className="flex ">
          {blogData?.content && (
            <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
          )}
        </div>
      </div>
      <br />
      <br />
      <div className="text-2xl text-center p-5">Reviews</div>
      <br />

      <div className="text-base ">
        {blogData?.review.map((review: IReview, index: number) => (
          <div key={index} className=" p-4 my-4 border rounded-xl">
            {review.text}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="text" className="block  font-semibold mb-2">
            Give Review
          </label>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                className="border rounded-xl w-full py-2 px-3"
              />
            )}
          />
          {errors.text && (
            <p className="text-red-500 text-sm">{errors.text.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-gray-200 border rounded-xl py-2 px-4 hover:bg-gray-300  dark:bg-gray-500 dark:hover:bg-slate-400 dark:text-white"
        >
          Review
        </button>
      </form>
    </div>
  );
}

export default SingleBlog;

SingleBlog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
