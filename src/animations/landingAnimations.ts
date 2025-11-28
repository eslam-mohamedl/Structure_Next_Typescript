"use client";
import { FadeIn } from "./fade";
import { Slide } from "./slide";
import { StaggerContainer } from "./stagger";
export const landingAnimations = {
  container: StaggerContainer(0.2, 0.15),
  heroTitle: Slide("up"),
  heroSubtitle: FadeIn("up", 0.2),
  ctaButton: FadeIn("none", 0.4),
};

// Landing Sectionتجمع كل الأنيميشنز اللي بتخص الـ

// ============ مثال استخدام GSAP  ============
// function LandingPage() {
//   const containerRef = StaggerContainer(0.2, 0.15);
//   const heroTitleRef = Slide("up");
//   const heroSubtitleRef = FadeIn("up", 0.2);
//   const ctaButtonRef = FadeIn("none", 0.4);
//
//   return (
//     <section ref={containerRef as any} className="landing-section">
//       <h1 ref={heroTitleRef as any}>Grow Your Business</h1>
//       <p ref={heroSubtitleRef as any}>Start today</p>
//       <button ref={ctaButtonRef as any}>Get Started</button>
//     </section>
//   );
// }
//
// مثال لقائمة بطاقات باستخدام StaggerContainer:
// function LandingCards() {
//   const containerRef = StaggerContainer(0.2, 0.15);
//
//   return (
//     <div ref={containerRef as any} className="cards-container">
//       <div className="card">Card 1</div>
//       <div className="card">Card 2</div>
//       <div className="card">Card 3</div>
//     </div>
//   );
// }

//الصفحة كلها تستخدم config واحد.
