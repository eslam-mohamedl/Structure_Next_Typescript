"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Player
        autoplay
        loop
        src="/assets/lottie/No-Data.json" // مسار الملف في فولدر public
        className="w-72 h-72 mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">404 - الصفحة غير موجودة</h1>
      <p className="text-gray-500 mb-6">يبدو أنك دخلت على مسار غير موجود </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
