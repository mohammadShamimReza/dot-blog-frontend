import { Inter } from "next/font/google";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-">
      <NavBar />
      <Main />
    </main>
  );
}
