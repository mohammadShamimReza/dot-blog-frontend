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
        className={`bg-gray-300 px-2 py-1 rounded-full text-white ${
          editor.isActive("bold") ? "font-bold" : ""
        }`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`bg-gray-300 px-2 py-1 rounded-full text-white ${
          editor.isActive("italic") ? "italic" : ""
        }`}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`bg-gray-300 px-2 py-1 rounded-full text-white ${
          editor.isActive("strike") ? "line-through" : ""
        }`}
      >
        S
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`bg-gray-300 px-2 py-1 rounded-full text-white ${
          editor.isActive("heading", { level: 1 }) ? "bg-blue-500" : ""
        }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`bg-gray-300 px-2 py-1 rounded-full text-white ${
          editor.isActive("heading", { level: 2 }) ? "bg-blue-500" : ""
        }`}
      >
        H2
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`bg-gray-300 px-2 py-1 rounded-full text-white ${
          editor.isActive("heading", { level: 4 }) ? "bg-blue-500" : ""
        }`}
      >
        H4
      </button>
    </div>
  );
}

export default ToolBar;
