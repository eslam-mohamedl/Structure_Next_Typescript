"use client";
import "../../app/[locale]/globals.css";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});
interface Props {
  message?: string;
  onRetry?: () => void;
}

export default function NetworkState({ message = "تحقق من اتصالك بالإنترنت.", onRetry }: Props) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <Player autoplay loop src="/assets/lottie/network.json" className="h-48 w-48" />
      <p className="mt-4 text-gray-500">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-primary mt-4 cursor-pointer rounded-lg px-6 py-2 text-white transition"
        >
          إعادة المحاولة
        </button>
      )}
    </div>
  );
}
