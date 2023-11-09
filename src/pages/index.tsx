import { Inter } from "next/font/google";
import Main from "../components/main/Main";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className="w-">
      <Main />
    </main>
  );
}
