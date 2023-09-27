"use client";

import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { PiSealWarningFill } from "react-icons/pi";

interface ScamAlertProp {
  message: string;
}

const ScamAlert: React.FC<ScamAlertProp> = ({ message }) => {
  useLayoutEffect(() => {
    const bgTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    bgTimeline
      .to(".scam-alert", {
        duration: 0.9,
        backgroundColor: "#1A1A1A",
      })
      .to(".scam-alert", { duration: 0.9, backgroundColor: "#F9AAAA" })
      .to(".scam-alert", { duration: 0.9, backgroundColor: "#1A1A1A" })
      .to(".scam-alert", { duration: 0.9, backgroundColor: "#F9AAAA" });

    const spinTimeline = gsap.timeline({ repeat: -1 });

    spinTimeline.to(".spin-element", {
      duration: 2,
      rotation: -360,
      ease: "linear",
    });
  }, []);

  return (
    <div className="scam-alert py-2 flex justify-center items-center text-custom-white">
      <PiSealWarningFill className="spin-element text-[3rem] " />
      <p className="pl-4 font-bold text-[1.2rem]">{message}</p>
    </div>
  );
};

export default ScamAlert;
