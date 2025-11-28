"use client"
import { ScaleIn } from "./scale";
import { FadeIn } from "./fade";

export const paymentAnimations = {
  successIcon: ScaleIn(),
  message: FadeIn("up", 0.2),
};

// ملف خاص بصفحات الدفع أو النجاح (Success Page / Checkout)
// صفحات الدفع لازم تكون لطيفة وسريعة وتعطي إحساس بالثقة والإنجاز.

// ============ مثال استخدام GSAP  ============
// function PaymentSuccess() {
//   const successIconRef = ScaleIn();
//   const messageRef = FadeIn("up", 0.2);
//
//   return (
//     <div className="payment-success">
//       <div ref={successIconRef as any} className="icon">
//         <CheckIcon />
//       </div>
//       <p ref={messageRef as any}>Payment Successful!</p>
//     </div>
//   );
// }
// سريع جدًا ومناسب للـ UX الخاص بالدفع.
