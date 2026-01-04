"use client";
import "../../app/[locale]/globals.css";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});
import Link from "next/link";
interface Props {
  message?: string;
  className?: string;
}

export default function EmptyState({ message = "لا توجد بيانات لعرضها.", className }: Props) {
  return (
    <div className={`flex min-h-[60vh] flex-col items-center justify-center ${className || ""}`}>
      <Player autoplay loop src="/assets/lottie/No-Data.json" className="h-48 w-48" />
      <p className="mt-4 text-gray-500">{message}</p>
      <p className="mb-6 text-gray-500">يبدو أنك دخلت على مسار غير موجود</p>
      <Link
        href="/"
        className="ds-bg-primary hover:bg-primary/10 rounded-lg px-6 py-3 text-white transition"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
