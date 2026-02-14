import * as React from "react";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-zinc-50/50 p-4 dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image-fade"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-[400px]">{children}</div>
    </div>
  );
}
