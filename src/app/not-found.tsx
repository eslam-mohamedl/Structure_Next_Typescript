"use client";
import "./[locale]/globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";

// Player هيشتغل بس على الـ Client لتجنب خطأ document
const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      {/* Animation */}
      <Player
        autoplay
        loop
        src="/assets/lottie/No-Data.json" // لازم يكون موجود في public/assets/lottie
        className="mb-8 h-72 w-72"
      />

      {/* العنوان */}
      <h1 className="mb-4 text-4xl font-bold">404 - الصفحة غير موجودة</h1>

      {/* وصف مختصر */}
      <p className="mb-6 text-gray-500">يبدو أنك دخلت على مسار غير موجود</p>

      {/* رابط العودة */}
      <Link
        href="/"
        className="bg-primary hover:bg-primary-600 rounded-lg px-6 py-3 text-white transition"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
