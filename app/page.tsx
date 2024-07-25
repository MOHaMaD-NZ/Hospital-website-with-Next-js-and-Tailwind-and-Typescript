"use client";

import Home from "./Components/Home";
import React, { useRef } from "react";
import Progressbar from "@/app/Components/Progressbar/progressbar";

export default function HomePage() {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={mainRef}>
      <Progressbar target={mainRef} />
      <Home />
    </main>
  );
}
