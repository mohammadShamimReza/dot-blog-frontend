import { Inter } from "next/font/google";
import NavBar from "./components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <NavBar />
    </main>
  );
}
