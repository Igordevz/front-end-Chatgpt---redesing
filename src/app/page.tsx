"use client";

import { ContentLoading } from "./style";

import Lottie from "lottie-react";
import { useState } from "react";
import animatedData from "@/assets/Animation - 1700745703225.json";
import Application from "@/components/Chat";


export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <>
      {loading ? (
        <ContentLoading>
          <Lottie animationData={animatedData} className="load"></Lottie>
        </ContentLoading>
      ) : (
          <Application/>
            
      )}
    </>
  );
}
