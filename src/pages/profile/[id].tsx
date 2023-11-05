import { EditableField } from "@/components/Fields/EditableFields";
import { useUsersByIdQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { ChangeEvent, ReactElement, useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineEdit,
  AiOutlineSave,
} from "react-icons/ai";
import Layout from "../../components/Layouts/Layout";
import MyBlogs from "./MyBlogs";

const ProfileData = () => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingJob, setIsEditingJob] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingLinkedIn, setIsEditingLinkedIn] = useState(false);
  const [isEditingGitHub, setIsEditingGitHub] = useState(false);

  const { id, role, email } = getUserInfo() as any;
  const { data: userData, isLoading } = useUsersByIdQuery(id);

  console.log(userData);

  const profileData = userData?.data;

  const [name, setName] = useState("Morsed Hasan");
  const [job, setJob] = useState("Software Engineer");
  const [experience, setExperience] = useState(
    "Software Engineer with 5+ years of experience in web development and software design. Proficient in JavaScript, React, Node.js, and more."
  );
  const [linkedin, setLinkedIn] = useState(
    "https://www.linkedin.com/in/johndoe"
  );
  const [github, setGitHub] = useState("https://github.com/johndoe");

  const handleSaveName = () => {
    setIsEditingName(false);
  };

  const handleSaveJob = () => {
    setIsEditingJob(false);
  };

  const handleSaveExperience = () => {
    setIsEditingExperience(false);
  };

  const handleSaveLinkedIn = () => {
    setIsEditingLinkedIn(false);
  };

  const handleSaveGitHub = () => {
    setIsEditingGitHub(false);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    // Removed HTMLTextAreaElement since it's not used
    setName(e.target.value);
  };

  const handleChangeJob = (e: ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
  };

  const handleChangeExperience = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setExperience(e.target.value);
  };

  const handleChangeLinkedIn = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkedIn(e.target.value);
  };

  const handleChangeGitHub = (e: ChangeEvent<HTMLInputElement>) => {
    setGitHub(e.target.value);
  };

  return (
    <div className="rounded-lg overflow-hidden max-w-2xl mx-auto dark:bg-gray-800 bg-white border">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-full h-96 object-cover"
      />
      <div className="p-4 ">
        <div className="mb-2 text-2xl font-semibold flex gap-2 items-center">
          {" "}
          {/* Fixed "align-middle" to "items-center" */}
          <EditableField
            isEditing={isEditingName}
            value={name}
            onSave={handleSaveName}
            onEdit={() => setIsEditingName(true)}
            onChange={handleChangeName}
          />
        </div>

        <div className="mb-2 flex gap-2">
          <EditableField
            isEditing={isEditingJob}
            value={job}
            onSave={handleSaveJob}
            onEdit={() => setIsEditingJob(true)}
            onChange={handleChangeJob}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold  gap-2 flex">
            {" "}
            Experience
            {!isEditingExperience ? (
              <AiOutlineEdit
                onClick={() => setIsEditingExperience(true)}
                className="w-6 h-6 hover:cursor-pointer"
              />
            ) : (
              <AiOutlineSave
                onClick={handleSaveExperience}
                className="w-6 h-6"
              />
            )}
          </p>
          <div className=" mb-2 flex gap-2">
            <EditableField
              isEditing={isEditingExperience}
              value={experience}
              // onSave={handleSaveExperience}
              // onEdit={() => setIsEditingExperience(true)}
              onChange={handleChangeExperience}
              isTextArea={true}
            />
          </div>
        </div>
        <br />
        <div className="mt-4">
          <EditableField
            isEditing={isEditingLinkedIn}
            value={linkedin}
            onSave={handleSaveLinkedIn}
            onEdit={() => setIsEditingLinkedIn(true)}
            onChange={handleChangeLinkedIn}
            icon={<AiFillLinkedin className="w-6 h-6 text-blue-500" />}
            link={linkedin}
          />
          <EditableField
            isEditing={isEditingGitHub}
            value={github}
            onSave={handleSaveGitHub}
            onEdit={() => setIsEditingGitHub(true)}
            onChange={handleChangeGitHub}
            icon={
              <AiFillGithub className="w-6 h-6 text-gray-800" /> /* Fixed the icon color */
            }
            link={github}
          />
        </div>
      </div>
      <p className="text-center font-semibold text-lg">Blogs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <MyBlogs />
      </div>
    </div>
  );
};

export default ProfileData;

ProfileData.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
