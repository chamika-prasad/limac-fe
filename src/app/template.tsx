"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/molecules/Loader";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const doTransition = async () => {
      setIsTransitioning(true);
    };

    doTransition();
  }, []);

  return (
    <div>
      <Loader isTransitioning={isTransitioning} />
      {children}
    </div>
  );
}
