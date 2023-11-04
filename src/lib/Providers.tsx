"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { UserProvider } from "./UserProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <UserProvider>{children}</UserProvider>
    </Provider>
  );
};

export default Providers;
