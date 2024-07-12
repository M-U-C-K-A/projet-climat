"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function Articles({ children }: DocsLayoutProps) {
  return (
    <>
      <Header />
      <main className="relative container mt-20 min-h-screen max-w-screen-2xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
