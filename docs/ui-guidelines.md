# UI Guidelines

- Use tokens for spacing, color, typography.
- Variants via class-variance-authority or clsx helper.
- Never hardcode colors – use Tailwind theme extension.
- Each component supports: variant + size + disabled props.
- Import icons explicitly: `import { HomeIcon } from '@/assets/icons'`.
- Do not use `import * as Icons`.
- Images in /public/images with optimized formats (.webp).
- Tailwind dark mode via class strategy.
