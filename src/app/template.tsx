"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/molecules/Loader";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const doTransition = async () => {
      setIsTransitioning(true);
    };

    doTransition();

     {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
    const timer = setTimeout(() => {
      setHide(true);
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <div>
      <Loader isTransitioning={isTransitioning} hide={hide}/>
      {children}
    </div>
  );
}
