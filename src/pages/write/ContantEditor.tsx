import { Controller } from "react-hook-form";
import Tiptap from "./Tiptap";

function ContantEditor({ control, errors }: { control: any; errors: any }) {
  return (
    <div>
      {" "}
      <div className="mb-4">
        <label htmlFor="content" className="block font-semibold mb-2">
          Content
        </label>
        <Controller
          name="content"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Tiptap content={field.name} onChange={field.onChange} />
          )}
        />
        <p>{errors.content?.message}</p>
      </div>
    </div>
  );
}

export default ContantEditor;
