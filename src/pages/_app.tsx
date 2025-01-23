import RootLayout from "@/components/Layouts/RootLayout";
import Providers from "@/lib/Providers";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Providers>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </Providers>
      </ThemeProvider>
    );
  }
}
