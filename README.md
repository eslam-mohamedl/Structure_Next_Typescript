# 🛠️ Maintenance Now 

A modern, scalable frontend for the **Maintenance Now** platform — a service app similar to Uber but designed for booking and managing professional technicians (electricians, plumbers, carpenters, etc.) on demand.

Built with **Next.js**, **TypeScript**, and a clean **MVC-inspired architecture**, it provides a modular, maintainable, and high-performance user experience.

---------

## ✨ Features

- User authentication (Login / Register / Forgot password)
- Technician browsing, filtering, and booking
- Real-time order status and notifications
- Multi-language support (i18n)
- Dark/Light mode
- Responsive design (mobile-first)
- Role-based routing & guards
- Reusable Design System components
- API caching and mutation with React Query
- Secure token handling via Axios interceptors

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| Framework | **Next.js (App Router)** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS**, **class-variance-authority**, **clsx** |
| Animations | **GSAP** |
| API & State | **React Query**, **Axios**, **Zustand** |
| Forms | **React Hook Form**, **Zod** |
| Icons | **Lucide React**, **iconify**, **Tabler Icons** |
| i18n | **next-intl** , **LanguageDetector** |
| Auth | **Custom Auth API (JWT tokens)** |
| Utilities | **js-cookie**, **tailwind-merge** |

---
## Installation

1. Clone the repository:
   ```sh
   https://github.com/Dev-workflow/maintenance-now.git
   cd maintenance-now
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
## 🤝 Contributing

- Pull requests are welcome!
- Before submitting, ensure:
- Code passes linting and build checks.
- Follows project structure and naming conventions.
- Uses existing design system components when possible.
- For major changes, open an issue first to discuss the update.
---

## 🧱 Folder Structure

  ```sh

src/
 ├── animation/               # Motion and animation utilities (Framer Motion configs)
 │
 ├── app/                     # Next.js App Router (main app entry)
 │   ├── auth/                # Auth-related pages (login, register, forgot-password)
 │   ├── client/              # Client-facing pages
 │   ├── dashboard/           # Dashboard and admin pages
 │   ├── public/              # Public assets (images, icons)
 │   ├── globals.css          # Global styles
 │   ├── layout.tsx           # Root layout component
 │   └── page.tsx             # Home page
 │
 ├── components/              # Reusable UI building blocks
 │   ├── atoms/               # Small, single-purpose UI elements (Button, Input)
 │   ├── molecules/           # Medium components combining atoms (Card, Form)
 │   └── organisms/           # Complex UI sections (Header, Footer, HeroSection)
 │
 ├── config/                  # Global configuration (env, constants, base URLs)
 │
 ├── contexts/                # React Contexts (AuthContext, ThemeContext, etc.)
 │
 ├── hooks/                   # Custom hooks (useAuth, useFetch, useDebounce, etc.)
 │
 ├── lib/                     # Library utilities or external integrations
 │
 ├── messages/                 # i18n translation files (en, ar, fr, etc.)
 │
 ├── modules/                 # Feature-based modules
 │   ├── auth/                # Authentication module
 │   │   ├── api/             # Auth API endpoints
 │   │   ├── components/      # Auth-specific components
 │   │   ├── hooks/           # Auth-related hooks
 │   │   └── utils/           # Helper functions for auth
 │   │
 │   ├── dashboard/           # Dashboard module
 │   └── landing/             # Landing page module
 │
 ├── providers/               # App-level providers (ThemeProvider, QueryProvider)
 │
 ├── services/                # API clients and axios configurations
 │   ├── ApiClient.ts         # Centralized API client instance
 │   └── AxiosConfig.ts       # Axios setup and interceptors
 │
 ├── store/                   # Global state management (Redux, Zustand, etc.)
 │
 │
 ├── utils/                   # Helper functions, constants, formatters
 │
 └── .editorconfig            # Code style consistency across the team
```

---
## 📄 License

This project is licensed under the ISC License.
