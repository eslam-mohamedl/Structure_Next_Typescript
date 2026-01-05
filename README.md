# 📦 Project Setup Roadmap

This project is a modern React/TypeScript front-end framework built for scalable web applications, supporting large feature sets (20+ features) and complex page hierarchies (30+ pages).
It is designed to be maintainable, modular, and team-friendly, optimized for both freelance client projects and multi-developer teams (up to 10 front-end engineers).


## ✨ Key design principles

- Atomic Design Pattern for UI components.
- Feature-based (MCV) architecture for modules.
- Centralized API client with error handling, caching, and token management.
- Full support for themes and languages.
- Advanced error and UX handling for all critical flows.
- Strict code quality and developer tooling.
- 
# 🔹 Clean Architure project
  ```sh
src/
├─assets /                                 # Static assets
│  ├─ images/
│  │  └─ images.tsx                        # import and export all images in this file
│  ├─ Lottie/                              # all images lottie files 
│  │  └─ loading.json
│  │  └─ No-Data.json
│  │  └─ network.json
│  │  └─ Loading.json
│  │  └─ error.json
│  └─ icons/
│     └─ icons.tsx                          # import and export all icons in this file

├─animations/
│ ├─ fade.ts
│ ├─ scale.ts
│ ├─ slide.ts
│ ├─ stagger.ts
│ ├─ transitions.ts

├─app/
│ ├─ [locale]        ├─ (auth)
│ ├─ not-found.tsx   ├─ (client)
│                    ├─ (guest)
│                    ├─ (protected)


├─ components/                             # Reusable UI Components (Atomic Design)
│  ├─ atoms/                               # Smallest elements
│    ├─ navbar/
│       ├─ NavIconButton.tsx
│       ├─ NavLink.tsx
│       ├─ NavLogo.tsx
│  │  ├─ Button.tsx
│  │  ├─ CopyRight.tsx
│  │  ├─ HighLightWord.tsx
│  │  ├─ Images.tsx
│  │  ├─ Input.tsx
│  │  ├─ LangToggle.tsx
│  │  ├─ Link.tsx
│  │  ├─ Logo.tsx
│  │  ├─ SeperatorLink.tsx
│  │  ├─ SoicalIcon.tsx
│  │  ├─ Text.tsx
│  │  ├─ ThemeToggle.tsx
│  │  └─ Title.tsx
│  ├─ molecules/                           # Combination of atoms
│  │  ├─ Navbar/
│  │     ├─ DesktopNavActions.tsx
│  │     ├─ DesktopNavLinks.tsx
│  │     ├─ MobileNavHeader.tsx
│  │     ├─ MobileNavLinks.tsx
│  │     └─ NavDropdown.tsx
│  ├─ organisms/                           # Larger sections
│  │  ├─ Navbar.tsx
│  │  ├─ Sidebar.tsx
│  │  └─ Footer.tsx
│  ├─ templates/                           # Page-level structures
│  │  ├─ AuthLayout.tsx
│  │  └─ DashboardLayout.tsx
│  │  └─ LandingLayout.tsx
│                         
├─ modules/                               # Feature-based modules (MCV)
│  ├─ auth/
│  │  ├─ api/           # EndPoint
│  │  │  ├─ loginApi.ts
│  │  │  └─ registerApi.ts
│  │  ├─ components/    # JSX
│  │  │  ├─ LoginForm.tsx
│  │  │  └─ RegisterForm.tsx
│  │  ├─ hooks/                 # Hook React Query ( useApiMutation.ts , useApiQuery.ts )
│  │  │  └─ uselogin.tsx              
│  │  │  └─ useRegister.tsx                
│  │  │ 
│  │  ├─ guards/
│  │  │  ├─ DoneGuard.tsx   
│  │  │  ├─ OTPGuard.tsx
│  │  │  ├─ ResetGuard.tsx
│  │  │  ├─ useResetFlow.ts
│  │  │
│  │  ├─ utils/
│  │  │  └─ authValidators.ts
│  │  ├─ types/            # types for features 
│  │
│  ├─ Landing/              # landing pages
│  └─ Dashboard/            # dashboard pages 

├─ services/                                # API clients layer
│  ├─ axiosConfig.ts                        # inculde axios , tokens
│  ├─ apiClient.ts                          # inculde method ( get , post ) and Errors Handling 
│  ├─ tokenService.ts                       # inculde tokens

├─ utils/                                   # Global utilities
│  ├─ validators.ts
│  ├─ constants.ts
│  ├─ data.tx                            # data for loop with map 
│  ├─ index.tx
│  ├─ theme.ts                           # theme in project 
│  ├─ routes.tsx                         # routes in navbar
│  └─ storage.ts

├─ styles/                                  # Global styles take design system and convert to utilites
│  ├─ index.css
│  └─ variables.css                         # file for design system form figma

├─ config/                                  
│  ├─ env.ts  # PROJECT INFO ,  API CONFIG , AUTH CONFIG
│  └─ .env    # some env.ts but for esay imports

├─ hooks/ 
│  ├─ useApiQuery.ts           # hook Query
│  ├─ useApiMutation.ts        # hook Mutation
|  ├─ index.ts

├─ stories/
│
│

├─ types/
│  ├─ api.d.ts        # global types in project 
│

├─ core/
│  ├─ boudaries ├─ErrorFallback.tsx
│  │            ├─GlobalErrorBoundary.tsx
│  │            ├─QueryErrorBoundary.tsx
│  │  
│  ├─ errors ├─ ApiError.ts
│            ├─ AppError.ts
│            ├─ errorMapper.ts
│            ├─ errorMessages.ts
│            ├─ ValidationError.ts
│
│  ├─ ui-state ├─ EmptyState.tsx
│              ├─ ErrorState.tsx
│              ├─ LoadingState.tsx
│              ├─ NetworkState.tsx
│              ├─ NotFoundState.tsx

├─ lib/
│   ├─ cn.ts  # incude tailwind-merge ,  clsx, type ClassValue

├─ guard/
│  ├─ AuthInitializer.tsx
│  ├─ ProtectedRoute.tsx
│  ├─ RoleGuard.tsx

├─ i18n/
│  ├─ index.ts

└─ main.tsx                                

 ```
 --------
 ## 🧱  Project Structure
 
1. Assets

src/assets/

- Contains all static resources:
- Images: images.tsx exports project-wide images.
- Icons: icons.tsx exports reusable icons.
- Lottie animations: reusable JSON animations like loading, 404, etc.

2. Animations

src/animations/

- Reusable animation helpers for page transitions and UI effects:
- fade.ts, slide.ts, scale.ts, stagger.ts, transitions.ts.

3. App Entry

src/app/

- AppProviders.tsx: all global providers (theme, i18n, query client, etc.)
- AppRouter.tsx: defines routing, layouts, and route guards.

4. Components (Atomic Design)

src/components/

- Structured into atoms, molecules, organisms, templates.

Atoms

- Smallest reusable elements:

- Buttons, Inputs, Text, Titles, Logos, Links, ThemeToggle, LangToggle, Nav elements, HighlightWord, etc.

Fully theme-aware (dark/light) and accessible.

Molecules

- Combination of atoms for small functional UI blocks:
- Navbar parts, Dropdowns, Mobile/desktop links, headers.

Organisms

Larger UI sections:

- Navbar, Sidebar, Footer.

Templates

- Page-level layouts:
-AuthLayout, DashboardLayout, LandingLayout.

5. Features (MCV pattern)

rc/features/

Modules are self-contained with their own:

- api/: endpoints (login, register)
- components/: JSX/UI
- hooks/: feature-specific hooks (React Query, guards, reset flows)
- utils/: validators or helper functions
- types/: feature-specific TypeScript types
- pages/: pages using templates

Examples:

auth/ → Login, Register, OTP flow, Forget password

Landing/ → Marketing landing pages

Dashboard/ → App dashboard pages

6. Services

 src/services/
 
- Central API client (apiClient.ts) supports GET/POST, error normalization, caching, retry, timeout, cancellation.
- axiosConfig.ts → Axios wrapper, interceptors, token injection.
- tokenService.ts → secure token storage and refresh strategy.

7. Global Utilities

src/utils/

- Validators, constants, routes, theme definitions, storage helpers.
- Provides project-wide reusable functions.

8. Styles

src/styles/

- index.css → global base styles
- token.css → design system tokens

9. Config

src/config/

- env.ts → centralized environment config for API, Auth, Project info.

- .env → secret keys and environment variables.

10. Hooks

src/hooks/

- useApiQuery.ts, useApiMutation.ts → centralized React Query wrappers
- index.ts → re-export hooks for easier imports

11. Core

src/core/

- Error boundaries → GlobalErrorBoundary.tsx, QueryErrorBoundary.tsx, ErrorFallback.tsx
- Error classes → ApiError, AppError, ValidationError, errorMapper
- UI states → reusable components for Empty, Loading, Network, Error, NotFound states

12. Guards

src/guard/

- AuthInitializer.tsx → initializes auth on app load
- ProtectedRoute.tsx → restricts access to authenticated users
- RoleGuard.tsx → role-based access control

13. Internationalization

- src/i18n/ → project-wide language support (i18n)

14. Library Helpers

- src/lib/cn.ts → utility for merging Tailwind classes (clsx + tailwind-merge)

-----------

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| Framework | **React.js ** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS**, **class-variance-authority**, **clsx** |
| Animations | **GSAP** |
| API & State | **React Query**, **Axios**, **Zustand** |
| Forms | **React Hook Form**, **Zod** |
| Icons | **Lucide React**, **iconify**, **Tabler Icons** |
| i18n | **i18n** |
| Auth | **Custom Auth API (JWT tokens)** |
| Utilities | **js-cookie**, **tailwind-merge** |


---
## Installation

1. Clone the repository:
   ```sh
   https://github.com/eslam-mohamedl/Structure_React_Typescript.git
   cd Structure_React_Typescript
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env` and update values as needed.

### Running the App
- Development mode (with hot reload):
  ```sh
  npm run dev
  ```
- Production build:
  ```sh
  npm run build
  npm start
  ```
---

## ✨ Features / المميزات

✅ Atomic Design Components

- Atoms, Molecules, Organisms, Templates — fully reusable and theme-aware
- a مكونات قابلة لإعادة الاستخدام بالكامل ومرنة مع الوضع الداكن / الفاتح

✅ Design System & Component Variants

- Tokens, Tailwind CSS utilities, dark/light mode, responsive design

- b نظام تصميم مركزي، وادوات Tailwind، ودعم للوضع الليلي/النهاري، واستجابة لجميع الشاشات 

✅ Multi-Language Support (i18n)

- Language switching, translations, RTL/LTR support

- c دعم تعدد اللغات مع التبديل بين النصوص واتجاه الكتابة

✅ Feature-based (MCV) Architecture

- API, Hooks, Components, Pages all scoped per feature

- d تنظيم الميزات بحيث كل ميزة تحتوي على API، هوكس، مكونات، صفحات

✅ Central API Client

- Axios wrapper / fetch wrapper with retry, timeout, cancelation

- g إدارة توكنات، caching, invalidation rules

- إدارة مركزية للـ API مع retry, timeout, وإلغاء الطلبات

✅ Error Normalization & Fallback UI

- Client and server errors mapped to user-friendly messages

- UI fallback components: Empty, Loading, Network, Error, NotFound

- h صفحات 404 / 403 / 500 منفصلة وتجربة مستخدم واضحة عند الأخطاء

✅ Route Guards & Role-Based Access

- AuthInitializer, ProtectedRoute, RoleGuard

- j حماية الصفحات وأذونات الوصول حسب الدور

✅ Global Loading & Cache Strategy

- Centralized loading states, React Query caching and invalidation

- k إدارة تحميل عام لجميع المراحل واستراتيجية كاش متقدمة

✅ Secure Token Handling

- Secure storage, refresh strategies, Axios interceptors

- l تخزين آمن للتوكنات واستراتيجيات تحديثها

✅ Code Quality & Developer Tools

- ESLint + Prettier enforced, Husky + lint-staged

- Storybook / Tests for core components

- t  جودة كود عالية مع أدوات تطوير متقدمة، واختبارات لمكونات الـ Core

✅ Animations & Transitions

- Fade, Scale, Slide, Stagger, custom transitions

- r تأثيرات حركة متقدمة للصفحات والمكونات



