"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// استدعاء Player فقط على الـ Client لتجنب document error
const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});

// مسار ملف Lottie موجود في public
import loadingAnimation from "../../public/assets/lottie/Loading.json";

type LoadingPageProps = {
  delay?: number; // وقت التأخير بالثواني
};

export default function LoadingPage({ delay = 0 }: LoadingPageProps) {
  const [show, setShow] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setShow(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Player autoplay loop src={loadingAnimation} style={{ height: 200, width: 200 }} />
    </div>
  );
}
