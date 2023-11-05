import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


function Tiptap({ onChange }: { onChange: (richText: string) => void }) {
  const editor = useEditor({
    extensions: [
      TextStyle.configure({ HTMLAttributes: [ListItem.name] }),
      StarterKit.configure({}),
    ],
    editorProps: {
      attributes: {
        class: "w-full p-2 border rounded-lg editor-height",
      },
    },
    injectCSS: true,
    onUpdate({ editor }) {
      // onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch">
      {editor ? (
        <div className="flex space-x-2 border rounded-lg mb-3">
          <button
            onClick={() => {
              editor.chain().focus().toggleBold().run();
              console.log("tada");
            }}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`px-2 py-1 ${
              editor.isActive("bold")
                ? "font-bold dark:bg-gray-500 bg-gray-200"
                : "hover:bg-gray-100 dark:hover:bg-gray-500"
            }`}
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`px-2 py-1 ${
              editor.isActive("italic")
                ? "italic dark:bg-gray-500 bg-gray-200"
                : "hover:bg-gray-100 dark:hover:bg-gray-500"
            }`}
          >
            I
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={`px-2 py-1 ${
              editor.isActive("strike")
                ? "line-through dark:bg-gray-500 bg-gray-200"
                : "hover:bg-gray-100 dark:hover:bg-gray-500"
            }`}
          >
            S
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`px-2 py-1 ${
              editor.isActive("heading", { level: 2 })
                ? "dark:bg-gray-500 bg-gray-200 hover:bg-gray-100"
                : "hover:bg-gray-100 dark:hover:bg-gray-500"
            }
        `}
          >
            <span className="text-xl">H2</span>
          </button>
        </div>
      ) : (
        ""
      )}

      <EditorContent editor={editor} />
    </div>
  );
}

export default Tiptap;
