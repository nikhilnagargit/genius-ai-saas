"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "@/components/sidebar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

function MobileSidebar({
  apiLimitCount = 0,
  isPro = false,
}: MobileSidebarProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className=" hover:bg-black/20 transition md:hidden" />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 w-2/3">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
