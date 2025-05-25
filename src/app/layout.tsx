import "./globals.css";
import { Besley } from "next/font/google"; //inter
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

const besley = Besley({ subsets: ["latin"] });

export const metadata = {
  title: "UCR R'Brains",
  description:
    "R'Brains and Behavior is a student-led psychology club dedicated to creating an inclusive environment for anyone interested in psychology.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${besley.className} bg-rbrains-background min-h-screen text-black`}
      >
        <div className="mt-20">
          <NavBar />
        </div>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
