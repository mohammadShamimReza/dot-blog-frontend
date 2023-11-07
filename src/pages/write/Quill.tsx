import React, { useEffect, useState } from "react";

const EmptyComponent = () => false;

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [
      { align: [] },
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video", "code", "code-block"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "background",
  "align",
  "code",
  "code-block",
];

const NextQuill = (props: any) => {
  const [quill, setQuill] = useState(<EmptyComponent />);

  useEffect(() => {
    // console.log(window);
    const ReactQuill =
      typeof window === "object" ? require("react-quill") : <EmptyComponent />;
    setQuill(<ReactQuill {...props} />);
  }, []);

  return quill;
};

export default function QuillEditor({
  valueEditor,
  setValueEditor,
}: {
  valueEditor: any;
  setValueEditor: any;
}) {
  return (
    <div>
      <NextQuill
        style={{ height: "200px" }}
        modules={modules}
        formats={formats}
        onChange={(value: React.SetStateAction<string>) =>
          setValueEditor(value)
        }
      />
    </div>
  );
}
