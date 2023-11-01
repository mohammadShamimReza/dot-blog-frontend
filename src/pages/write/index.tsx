import { yupResolver } from "@hookform/resolvers/yup";
import { ReactElement } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import Layout from "../components/Layouts/Layout";
import Tiptap from "./Tiptap";

interface FormInputs {
  title: string;
  topic: string;
  content: string;
}

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  topic: yup.string().required("Topic is required"),
  content: yup.string().required("Content is required"),
});

function WriteForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { content: "", title: "", topic: "" },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
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
                className="w-full p-3 rounded-md focus:outline-none bg-gray-200 dark:bg-gray-600 text-black"
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
          className="py-2 px-6 rounded-lg focus:outline-none focus:ring border"
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
