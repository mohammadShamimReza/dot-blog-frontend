import { useUser } from "@/lib/UserProvider";
import { useUsersByIdQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

function User() {
  const { user, setUser } = useUser();
  const { role, id } = getUserInfo() as any;
  const { data: userData } = useUsersByIdQuery(id);
  if (userData) {
    const { profileImg, name, updatedAt } = userData;
  }

  console.log(role, id);

  return (
    <div>
      <div className="relative group">
        {user.role === "" ? (
          <RxAvatar className="w-8 h-8" />
        ) : (
          <div className="flex items-center">
            <Image
              src={userData?.profileImg ? userData?.profileImg : ""}
              height={2}
              width={2}
              alt="Writer"
              className="flex w-8 h-8 rounded-full mr-2"
            />
          </div>
        )}

        {user.role === "" && (
          <div className="absolute hidden  group-hover:block top-full right-2 space-y-2">
            <div className="">
              <Link href={"/login"}>
                <button className="w-20 rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  Login
                </button>
              </Link>
            </div>
            <div className="">
              <Link href={"/signup"}>
                <button className="w-20 rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  SignUp
                </button>
              </Link>
            </div>
          </div>
        )}

        {user.role === "user" && (
          <div className="absolute hidden  group-hover:block top-full right-2 space-y-2">
            <div className="">
              <Link href={`/profile/${user?.id}`}>
                <button className="w-20 rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  Profile
                </button>
              </Link>
            </div>
            <div className="">
              <Link href={"/signup"}>
                <button className="w-20 rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  LouOut
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
