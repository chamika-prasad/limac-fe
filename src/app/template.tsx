"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/molecules/Loader";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import { ToastContainer } from 'react-toastify';

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
    <Provider store={store}>
      <div>
        <Loader isTransitioning={isTransitioning} hide={hide} />
        <ToastContainer />
        {children}
      </div>
    </Provider>
  );
}
