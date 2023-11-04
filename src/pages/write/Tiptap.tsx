import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

function Tiptap({ onChange }: { onChange: (richText: string) => void }) {
  const editor = useEditor({
    extensions: [
      TextStyle.configure({ HTMLAttributes: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    // content,

    editorProps: {
      attributes: {
        class: "w-full p-2 border rounded-lg editor-height ",
      },
    },
    injectCSS: true,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      // console.log(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default Tiptap;

//   className = "";
//   placeholder = "Write your blog post content here";
//   required;
