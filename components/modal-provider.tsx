"use client";

import React, { useEffect, useState } from "react";
import ProModal from "@/components/pro-modal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProModal />
    </>
  );
}

export default ModalProvider;
