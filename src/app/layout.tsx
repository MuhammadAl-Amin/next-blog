
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryClientProviderWrapper from "@/components/queryClientProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {/* <QueryClientProvider client={queryClient}> */}
        <QueryClientProviderWrapper>
          {" "}
          <body className={inter.className}>
            <div className="flex flex-col min-h-screen">
              {children}
              <Footer></Footer>
            </div>
          </body>
        </QueryClientProviderWrapper>

        {/* </QueryClientProvider> */}
      </ThemeProvider>
    </html>
  );
}
