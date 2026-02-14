"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Command, LogOut } from "lucide-react";
import gsap from "gsap";
import { PageLayout } from "../components/PageLayout";
import { ThemeToggle } from "../components/ThemeToggle";

export default function DashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".dashboard-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      <div
        ref={containerRef}
        className="relative flex flex-col items-center justify-center space-y-8"
      >
        {/* Theme Toggle - Fixed Top Right of Screen */}
        <div className="dashboard-item fixed right-6 top-6 z-50">
          <ThemeToggle />
        </div>

        <div className="dashboard-item relative flex items-center justify-center">
          {/* Centered Logo */}
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-zinc-950 shadow-2xl ring-8 ring-zinc-950/5 transition-transform duration-500 hover:scale-105 dark:bg-white dark:ring-white/5">
            <Command className="h-12 w-12 text-white dark:text-zinc-950" />
          </div>
          {/* Pulse effect */}
          <div className="absolute inset-0 -z-10 scale-110 animate-pulse rounded-full bg-zinc-950/20 blur-2xl dark:bg-white/20"></div>
        </div>

        <div className="dashboard-item space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Dashboard
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Welcome to your workspace.
          </p>
        </div>

        <div className="dashboard-item">
          <button
            onClick={() => router.push("/")}
            className="inline-flex h-10 w-[120px] cursor-pointer items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium shadow-sm transition-all hover:scale-105 hover:bg-zinc-50 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-300"
          >
            <LogOut className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
