"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Direction = "up" | "down" | "left" | "right" | "none";


export const FadeIn = (
  direction: Direction = "none", // دا الافتراضي مفيش اتجاه
  delay: number = 0 // تأخير قبل بدء الحركة بالثواني قيمته الافتراضية 0 
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return; // لو الريف مش موجود مفيش داعي ننفذ الكود

    let x = 0, y = 0;

    if (direction === "left") x = 50;
    else if (direction === "right") x = -50;
    else if (direction === "up") y = 50;
    else if (direction === "down") y = -50;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x,
        y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.5,
        delay,
        ease: "power2.out", // ديه ال easeOut بتاع GSAP
      }
    );
  }, [direction, delay]);

  return ref;
};
//  استخدامه
// مع ال hero Image مثلا 
// تاثيره بيخلي الصورة تظهر مع حركة خفيفة من اليمين

// function HeroImage() {
//   const imgRef = FadeIn("right");

//   return (
//     <img
//       ref={imgRef as any}
//       src="/hero.png"
//       alt="Hero"
//     />
//   );
// }