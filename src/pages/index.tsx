import { Inter } from "next/font/google";
import { ReactElement } from "react";
import Layout from "../components/Layouts/Layout";
import Main from "../components/main/Main";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className="w-">
      <Main />
    </main>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

