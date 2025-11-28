"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Direction = "up" | "down" | "left" | "right";

export const Slide = (
  direction: Direction = "up",
  delay: number = 0,
  dependencies: React.DependencyList = []
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const distance = 60;
    let x = 0,
      y = 0;

    if (direction === "left") x = distance;
    else if (direction === "right") x = -distance;
    else if (direction === "up") y = distance;
    else if (direction === "down") y = -distance;

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
        duration: 0.7,
        delay,
        ease: "power2.out",
      }
    );
  }, [direction, delay, dependencies]);

  return ref;
};

// مع تلاشي خفيف (up, down, left, right) يحرك العنصر من اتجاه محدد
// الاستخدام

//  ============ مثال مع محتوى متغير ============

// function TabContent({ activeTab }: { activeTab: string }) {
 // Pass activeTab as dependency so animation reruns when tab changes
 // ادى الصفحه النشطه للسلايد عشان الحركة تتنفذ تاني لما الصفحه تتغير
//   const divRef = Slide("right", 0, [activeTab]);

//   return (
//     <div ref={divRef as any} key={activeTab}>
//       <h2>{activeTab} Content</h2> // المحتوى الذى يتغير بناء على الصفحه النشطه
//     </div>
//   );
// }