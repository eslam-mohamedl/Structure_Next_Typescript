"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export const transitions = {
  fast: {
    duration: 0.3,
    ease: "power2.out",
  },
  normal: {
    duration: 0.6,
    ease: "power2.out",
  },
  slow: {
    duration: 0.9,
    ease: "power2.out",
  },
  spring: {
    duration: 1.5,
    ease: "elastic.out(1, 0.5)", 
  },
};

export const Transition = (
  from: gsap.TweenVars,
  to: gsap.TweenVars,
  transition:
    | typeof transitions.fast
    | typeof transitions.normal
    | typeof transitions.slow
    | typeof transitions.spring = transitions.normal
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(ref.current, from, {
      ...to,
      ...transition,
    });
  }, [from, to, transition]);

  return ref;
};

//(ease / spring). تحكم موحد في سرعة الحركة ونوع التوقيت
// الاستخدمات
//variants لما تعمل انيميشن داخل مكون بدون

//امثله
// مع ال scale

// function SuccessIconWrapper() {
//   const divRef = Transition(
//     { scale: 0 },           // from (initial)
//     { scale: 1 },           // to (animate)
//     transitions.spring      // transition
//   );

//   return (
//     <div ref={divRef as any}>
//       <SuccessIcon />
//     </div>
//   );
// }

// مع ال fade in

// function FadeInContent() {
//   const divRef = Transition(
//     { opacity: 0 },
//     { opacity: 1 },
//     transitions.normal
//   );

//   return (
//     <div ref={divRef as any}>
//       Content that fades in
//     </div>
//   );
// }
