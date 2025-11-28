"use client"
import { Slide } from "./slide";
import { FadeIn } from "./fade";

export const dashboardAnimations = {
  card: FadeIn("up", 0.1),
  sidebar: Slide("left"),
  header: FadeIn("down"),
};

// ملف خاص بحركات الداشبورد (القوائم، الكروت، الجداول...).

// الداشبورد بيحتوي على بيانات متغيرة، فمحتاج حركات subtle (ناعمة)
// تعطي إحساس بالاستجابة من غير بطء.

// ============ مثال استخدام GSAP (بدون Framer Motion) ============
// function Dashboard() {
//   const sidebarRef = Slide("left");
//   const headerRef = FadeIn("down");
//   const cardRef = FadeIn("up", 0.1);
//
//   return (
//     <>
//       <aside ref={sidebarRef as any} className="sidebar">
//         {/* Sidebar content */}
//       </aside>
//
//       <header ref={headerRef as any} className="header">
//         {/* Header content */}
//       </header>
//
//       <div ref={cardRef as any} className="card">
//         <Card />
//       </div>
//     </>
//   );
// }

// الكروت والبيانات بتظهر بانسيابية.

// sidebar والـ header يدخلوا بلطافة (مش فجأة).
