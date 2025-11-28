# Design System Rules

UI components = stateless.

- Button, Input, Card, Modal under /atoms & /molecules.
- All components exported from `atoms/index.ts`.

Naming:

- use PascalCase for components (Button.tsx).
- use kebab-case for folders.

Reusable logic lives in hooks.
Do not mix CSS files per component – use Tailwind utilities only.
