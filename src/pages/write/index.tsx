import { yupResolver } from "@hookform/resolvers/yup";
import { ReactElement, RefObject, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import Image from "next/image";
import Layout from "../../components/Layouts/Layout";
import Tiptap from "./Tiptap";

interface FormInputs {
  title: string;
  topic: string;
  content: string;
  image: File | null;
}

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  topic: yup.string().required("Topic is required"),
  content: yup.string().required("Content is required"),
  image: yup.mixed().test("file", "File is required", function (file) {
    if (this.parent.image) {
      return file !== null;
    }
    return true;
  }),
});

function WriteForm() {
  const fileInputRef: RefObject<HTMLInputElement> = useRef(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema) as any,
    mode: "onChange",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  console.log(selectedImage, "this is imege");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log(files, files[0]);
      setSelectedImage(files[0]);
    } else {
      setSelectedImage(null);
    }
  };
  const handleRemoveImage = () => {
    setSelectedImage(null); // Remove the selected image from the state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input value
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (selectedImage) {
      data.image = selectedImage;
    }
    console.log("Form values:", data);

    // You can perform further actions, such as sending data to a server, here.
  };

  return (
    <div>
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
          <label htmlFor="topic" className="block mb-2">
            Topic
          </label>
          <Controller
            name="topic"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="w-full p-3 rounded-md focus:outline-none bg-gray-200 dark:bg-gray-600"
                required
              >
                <option value="" disabled>
                  Select a Topic
                </option>
                <option value="Cloud">Cloud</option>
                <option value="Software">Software</option>
                {/* Add more topic options as needed */}
              </select>
            )}
          />
          <p>{errors.topic?.message}</p>
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
          <label htmlFor="image" className="py-3 block  font-bold">
            Thumbnail Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
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

          {errors.image && (
            <p className="text-red-600">{errors.image.message}</p>
          )}
        </div>

        {/* <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Upload
        </button> */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Content</label>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field }) => <Tiptap onChange={field.onChange} />}
          />
          <p>{errors.content?.message}</p>
        </div>
        <button
          type="submit"
          className="py-2 px-6 rounded-lg focus:outline-none focus:ring border hover:rounded-3xl hover:border"
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
