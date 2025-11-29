"use client";

import dynamic from "next/dynamic";
import loadingAnimation from "../../public/assets/lottie/Loading.json";

// dynamic import → بيمنع SSR
const LottiePlayer = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), {
  ssr: false,
});

export default function LoadingPage() {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-white dark:bg-[#0d0d0d]"
      style={{ background: "var(--color-bg)" }}
    >
      <LottiePlayer autoplay loop src={loadingAnimation} style={{ height: 300, width: 300 }} />
    </div>
  );
}
