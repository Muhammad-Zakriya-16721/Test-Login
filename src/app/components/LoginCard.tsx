"use client";

import * as React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ThemeToggle } from "./ThemeToggle";
import { CustomPhoneInput } from "./CustomPhoneInput";
import { Command } from "lucide-react";

export function LoginCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>();

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".animate-fade-up",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-zinc-50/50 p-4 dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image-fade"></div>

      <div ref={containerRef} className="relative w-full max-w-[400px]">
        {/* Theme Toggle */}
        <div className="animate-fade-up absolute -top-16 right-0 md:-right-16 md:top-0">
          <ThemeToggle />
        </div>

        <div className="animate-fade-up mb-8 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 dark:bg-white shadow-xl mb-6 ring-4 ring-zinc-950/5 dark:ring-white/5">
            <Command className="h-6 w-6 text-white dark:text-zinc-950" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Enter your phone number to continue to K.otp
          </p>
        </div>

        <div className="animate-fade-up space-y-4 relative z-10">
          <div className="space-y-2">
            <CustomPhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              className=""
            />
          </div>

          <button className="inline-flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-zinc-950 px-8 text-sm font-medium text-white shadow-lg shadow-zinc-950/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:shadow-white/10 dark:focus-visible:ring-zinc-300">
            Continue with Phone
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-50/50 px-2 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
                Or continue with
              </span>
            </div>
          </div>

          <button className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-all hover:bg-zinc-50 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-300">
            {/* Google SVG Icon */}
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>
        </div>

        <p className="animate-fade-up mt-8 text-center text-xs text-zinc-500 dark:text-zinc-500">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="underline hover:text-zinc-950 dark:hover:text-zinc-300"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline hover:text-zinc-950 dark:hover:text-zinc-300"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
