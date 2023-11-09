import { getUserInfo } from "@/services/auth.service";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  role: string;
  id: string;
}

interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({ role: "", id: "" });

  const { role, id } = getUserInfo() as any;

  useEffect(() => {
    if (role && id) {
      setUser({ role, id });
    }
  }, [role, id]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
