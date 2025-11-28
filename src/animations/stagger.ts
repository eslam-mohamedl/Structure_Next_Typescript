"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const StaggerContainer = (delayChildren: number = 0.1, staggerChildren: number = 0.15) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;
    if (children.length === 0) return;

    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 50, // بتبدا ب 50 تحت و بتكون مخفيه
      },
      {
        opacity: 1,
        y: 0, // بتتحرك لمكانها الطبيعي
        duration: 0.6,
        ease: "power2.out",
        stagger: staggerChildren,
        delay: delayChildren,
      }
    );
  }, [delayChildren, staggerChildren]);

  return containerRef;
};

//لما عندك مجموعة عناصر (زي كروت أو لستة)
// تخليهم يظهروا وراء بعض بفاصل زمني بسيط
// المده بـ 0.1 أو 0.15 ثانية
// الاستخدامات
// anding sections - cards - dashboard lists

// Cards تظهر بالتتابع

// const containerRef = StaggerContainer(0.1, 0.15);

// <div ref={containerRef}>
//   {cards.map((card) => (
//     <div>  // مفيش انميشن محتاجينه للكارد نفسه
//       <Card />
//     </div>
//   ))}
// </div>
