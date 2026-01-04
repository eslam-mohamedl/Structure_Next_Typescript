"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});

interface Props {
  error?: Error | null;
}

export default function ErrorFallback({ error }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Player autoplay loop src="/assets/lottie/Error-Fallback.json" className="mb-8 h-72 w-72" />
      <h1 className="mb-4 text-4xl font-bold">حدث خطأ غير متوقع</h1>
      {error && <p className="mb-6 text-red-500">{error.message}</p>}
      <Link
        href="/"
        className="bg-primary hover:ds-bg-primary rounded-lg px-6 py-3 text-white transition"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
