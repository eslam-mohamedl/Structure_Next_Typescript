"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const ScaleIn = (delay: number = 0) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return; // لو الريف مش موجود مفيش داعي ننفذ الكود

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        delay,
        ease: "power2.out", // ديه ال easeOut بتاع GSAP
      }
    );
  }, [delay]);

  return ref;
};

//  استخدامه
// مع ال Modal مثلا
// تاثيره بيخلي المودال يظهر مع تكبير خفيف

// function ModalWrapper() {
//   const divRef = ScaleIn();

//   return (
//     <div ref={divRef as any}>
//       <Modal />
//     </div>
//   );
// }
