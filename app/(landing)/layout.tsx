import React from "react";

function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto mx-w-screen-xl h-full">{children}</div>
    </main>
  );
}

export default LandingLayout;
