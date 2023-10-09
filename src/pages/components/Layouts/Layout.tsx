import { ThemeProvider } from "next-themes";
import { ReactElement } from "react";

import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

function Layout({ children }: { children: ReactElement }) {
  return (
    <ThemeProvider attribute="class">
      <div>
        <NavBar />
        {children} <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
