import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { RightRail } from "@/components/RightRail";
import { SearchProvider } from "@/components/SearchContext";
import { SearchModal } from "@/components/SearchModal";
import { MobileBottomNav } from "@/components/MobileBottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vahri Maulana - Portfolio",
  description: "UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-slate-100 font-sans min-h-screen antialiased flex justify-center">
        <SearchProvider>
          <div className="w-full max-w-[1340px] px-0 md:px-4 flex min-h-screen pb-[72px] md:pb-0">
            {/* Left Sidebar */}
            <div className="hidden md:block w-[280px] lg:w-[300px] flex-shrink-0">
              <div className="sticky top-0 h-screen overflow-y-auto">
                <Sidebar />
              </div>
            </div>

            {/* Center Feed */}
            <main className="flex-1 min-w-0 bg-[#0a0a0a] flex justify-center">
              <div className="w-full max-w-[600px] md:border-x border-[#181818] min-h-screen">
                {children}
              </div>
            </main>

            {/* Right Rail Shell */}
            <div className="w-[320px] lg:w-[360px] flex-shrink-0 hidden lg:block">
              <div className="sticky top-0 h-screen overflow-y-auto bg-[#0a0a0a] custom-scrollbar">
                <RightRail />
              </div>
            </div>
          </div>

          <SearchModal />

          {/* Mobile Bottom Nav */}
          <MobileBottomNav />
        </SearchProvider>
      </body>
    </html>
  );
}
