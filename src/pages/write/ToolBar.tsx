import { type Editor } from "@tiptap/react";

function ToolBar({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex space-x-2 border rounded-sm">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={` px-2 py-1 rounded-full text-white ${
          editor.isActive("bold") ? "font-bold bg-gray-500" : ""
        }`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={` px-2 py-1 rounded-full text-white ${
          editor.isActive("italic") ? "italic bg-gray-500" : ""
        }`}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={` px-2 py-1 rounded-full text-white ${
          editor.isActive("strike") ? "line-through bg-gray-500" : ""
        }`}
      >
        S
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={` px-2 py-1 rounded-full text-white ${
          editor.isActive("heading", { level: 2 }) ? "bg-gray-500" : ""
        }`}
      >
        {" "}
        <span className="text-xl">H2</span>
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={` px-2 py-1 rounded-full text-white ${
          editor.isActive("heading", { level: 4 }) ? "bg-gray-500" : ""
        }`}
      >
        <span className="text-lg">H4</span>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={` px-2 py-1 rounded-full text-white ${
          editor.isActive("heading", { level: 6 }) ? "bg-gray-500" : ""
        }`}
      >
        <span className="text-sm">H6</span>
      </button> */}
    </div>
  );
}

export default ToolBar;
