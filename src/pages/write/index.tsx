import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { useTypesQuery } from "@/redux/api/typeApi";
import { getUserInfo } from "@/services/auth.service";
import { IBlogType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import * as yup from "yup";
import Layout from "../../components/Layouts/Layout";
import QuillEditor from "./Quill";

interface FormInputs {
  userId: string;
  title: string;
  typeId: string;
  content: string;
  thumbnailImg: File | null | string;
}

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  typeId: yup.string().required("type is required"),
  content: yup.string().required("Content is required"),
  thumbnailImg: yup.mixed().test("file", "File is required", function (file) {
    if (this.parent.thumbnailImg) {
      return file !== null;
    }
    return true;
  }),
});

function WriteForm() {
  const { data: blogTypes, error } = useTypesQuery({});
  const [createBlog, { data, isSuccess }] = useCreateBlogMutation();
  const { id } = getUserInfo() as any;
  const blogtypes = blogTypes;
  const fileInputRef: RefObject<HTMLInputElement> = useRef(null);
  const router = useRouter();
  const [valueEditor, setValueEditor] = useState("");
  const [thumbImgUrl, setThumbImgUrl] = useState("");

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema) as any,
    mode: "onChange",
  });

  useEffect(() => {
    register("content");
  }, [register]);

  useEffect(() => {
    setValue("content", valueEditor);
  }, [setValue, valueEditor]);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
    } else {
      setSelectedImage(null);
    }
  };
  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "mwo5ydzk");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqwnzs85c/image/upload",
        formData
      );
      setThumbImgUrl(response.data.secure_url);
    } catch (error) {
      console.error(error);
    }

    // data.thumbnailImg = selectedImage;

    data.thumbnailImg = thumbImgUrl;
    data.userId = id;

    try {
      const buildBlog = await createBlog(data);

      buildBlog
        ? toast("Blog created successfully", {
            style: {
              border: "1px solid black",
            },
          })
        : toast("Blog not created successfully");
      reset({ thumbnailImg: "", title: "", typeId: "" });
      handleRemoveImage();

      if ("data" in buildBlog) {
        // Handle the success case
        const blogId = buildBlog.data!.id;
        router.push(`/blogs/${blogId}`);
      } else {
        console.error("An error occurred:", buildBlog.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg overflow-hidden max-w-4xl mx-auto border border-gray-400 p-4"
      >
        <h2 className="text-3xl font-semibold mb-4">Create a Blog Post</h2>
        <div className="mb-4">
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="w-full p-3 rounded-md focus:outline-none bg-gray-200 dark:bg-gray-600 "
                placeholder="Title"
                required
              />
            )}
          />
          <p>{errors.title?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="typeId" className="block mb-2">
            Topic
          </label>
          <Controller
            name="typeId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="w-full p-3 rounded-md focus:outline-none bg-gray-200 dark:bg-gray-600"
                required
              >
                <option value="" disabled>
                  Select a type
                </option>
                {blogtypes?.map((type: IBlogType) => (
                  <option key={type?.id} value={type?.id}>
                    {type.title}
                  </option>
                ))}
                {/* Add more type options as needed */}
              </select>
            )}
          />
          <p>{errors.typeId?.message}</p>
        </div>
        {selectedImage !== null && (
          <div className="rounded-lg border">
            <div className="p-4">
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="thumbnail image"
                height={859.2}
                width={144}
                // height={100}
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="thumbnailImg" className="py-3 block  font-bold">
            Thumbnail Image
          </label>
          <input
            type="file"
            id="thumbnailImg"
            name="thumbnailImg"
            ref={fileInputRef}
            className="border border-gray-300 p-2 rounded-lg "
            onChange={handleImageChange}
          />
          {selectedImage !== null && (
            <button
              type="button"
              onClick={handleRemoveImage}
              className="ml-2 text-red-600 hover:underline py-2 px-3 rounded-lg focus:outline-none focus:ring border"
            >
              Remove Image
            </button>
          )}

          {errors.thumbnailImg && (
            <p className="text-red-600">{errors.thumbnailImg.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Content</label>

          {/* <ReactQuill
            className="h-72 "
            theme="snow"
            value={editorContent}
            onChange={onEditorStateChange}
          /> */}

          <QuillEditor
            valueEditor={valueEditor}
            setValueEditor={setValueEditor}
          />

          {errors.content && (
            <p className="text-red-600">{errors.content.message}</p>
          )}
        </div>
        <br />
        <br />
        <button
          type="submit"
          className="py-2 px-6 bg-gray-300 border rounded hover:bg-gray-400 hover:text-white dark:bg-gray-500 dark:hover:bg-slate-400 dark:text-blackr"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default WriteForm;

WriteForm.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
