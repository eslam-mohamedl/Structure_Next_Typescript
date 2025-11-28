import { FadeIn } from "./fade";
import { ScaleIn } from "./scale";

export const authAnimations = {
  form: ScaleIn(),
  input: FadeIn("up", 0.1),
  button: FadeIn("up", 0.2),
};

// ملف خاص بصفحات تسجيل الدخول / التسجيل / OTP / Forgot password.

// الصفحات دي لازم تكون بسيطة وناعمة في الحركة (تعطي ثقة للمستخدم)

// ============ مثال للاستخدام  ============

// function AuthForm() {
//   const { formRef, inputRef, buttonRef } = AuthAnimations();

//   return (
//     <div ref={formRef as any} className="auth-form">
//       <input
//         ref={inputRef as any}
//         type="email"
//         placeholder="Email"
//       />
//       <button ref={buttonRef as any}>
//         Submit
//       </button>
//     </div>
//   );
// }

// حركة خفيفة وسلسة وقت ظهور النموذج.

// تحسين تجربة المستخدم في صفحات الـ Auth اللي بتحتاج تركيز وهدوء.
