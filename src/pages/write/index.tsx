import { ReactElement, useState } from "react";
import Layout from "../components/Layouts/Layout";

function WriteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rows, setRows] = useState(4); // Initial number of rows
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // onSubmit({ title, content });
    // Clear form fields after submission
    setTitle("");
    setContent("");
    setRows(4);
    setSelectedTopic("");
  };

  const handleContentChange = (e: { target: { value: any } }) => {
    const contentValue = e.target.value;
    setContent(contentValue);

    // Calculate the number of rows based on content length (adjust this logic as needed)
    const contentLength = contentValue.split("\n").length;
    setRows(Math.max(4, contentLength)); // Minimum 4 rows or more based on content
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg overflow-hidden max-w-4xl mx-auto border border-gray-300 p-4"
      >
        <h2 className="text-3xl font-semibold mb-4">Create a Blog Post</h2>
        <div className="mb-4">
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus placeholder-gray-500"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="topic"
            className="block text-gray-700 font-semibold mb-2"
          >
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-gray-500"
            required
          >
            <option value="" disabled>
              Select a Topic
            </option>
            <option value="Cloud">Cloud</option>
            <option value="Software">Software</option>
            {/* Add more topic options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-semibold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange} // Use the handleContentChange function
            rows={rows} // Use the rows variable
            className="w-full p-2 border rounded-md"
            placeholder="Write your blog post content here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className=" py-2 px-6 border border-gray-300 rounded-lg focus:outline-none focus:ring"
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
