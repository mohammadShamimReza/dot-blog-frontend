import { ChangeEvent } from "react";
import { AiOutlineEdit, AiOutlineSave } from "react-icons/ai";

interface EditableFieldProps {
  isEditing: boolean;
  value: string;
  onSave?: () => void;
  onEdit?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
  icon?: React.ReactNode;
  link?: string;
}

export const EditableField: React.FC<EditableFieldProps> = ({
  isEditing,
  value,
  onSave,
  onEdit,
  onChange,
  isTextArea, // New prop to indicate textarea
  icon,
  link,
}) => {
  return (
    <div className="flex gap-2 items-center w-full">
      {isEditing ? (
        <>
          {isTextArea ? ( // Conditionally render a textarea
            <textarea
              value={value}
              className=" border-2 rounded-lg w-full"
              onChange={onChange}
            />
          ) : (
            <>
              {" "}
              <input
                type="text"
                value={value}
                className="border-2 rounded-lg w-full"
                onChange={onChange}
              />
              <AiOutlineSave onClick={onSave} className="w-6 h-6" />
            </>
          )}
        </>
      ) : (
        <>
          {icon}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
          {isTextArea ? (
            ""
          ) : (
            <AiOutlineEdit
              onClick={onEdit}
              className="w-6 h-6 hover:cursor-pointer"
            />
          )}
        </>
      )}
    </div>
  );
};
