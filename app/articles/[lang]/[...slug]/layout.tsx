"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function Articles({ children }: DocsLayoutProps) {
  return (
    <>
      <Header />
      <main className="relative mt-20 py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] max-w-screen-2xl m-auto ml-46">
        <div className="prose dark:prose-invert prose-2xl">{children}</div>
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}
