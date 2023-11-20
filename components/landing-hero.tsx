"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";
const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Use This Generative AI Tool For</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Generative Chat",
                "Image Generation",
                "Music Generation",
                "Code Generation",
                "Video Generation",
              ],
              autoStart: true,
              loop: true,
              delay: 30,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Simplify your workload using the power of AI.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button
            variant={"premium"}
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Let&apos;s Go
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Try it for free.
      </div>
    </div>
  );
};

export default LandingHero;
