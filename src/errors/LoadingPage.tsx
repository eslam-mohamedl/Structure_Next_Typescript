import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "@/assets/lottie/Loading.json";

export const LoadingPage = () => (
  <div className="-pt-[50px] bg-bg flex h-screen w-screen items-center justify-center">
    <Player autoplay loop src={loadingAnimation} style={{ height: 450, width: 450 }} />
  </div>
);
