# Team Roles & Responsibilities

## Frontend Leader
- .مسؤول عن نشر المعايير التقنية والتدريب
- .Clean Architecture وتطبيق (Code Review) مراجعة الكود
- .naming conventions + structure يحدد
- .checklist.md فقط بعد المرور على PR يعتمد

## Frontend Developer
- يلتزم بالـ structure المحدد في `folder-structure.md`.
- لا يكتب axios calls داخل components.
- يراجع PR لنفسه أولاً وفق checklist.md.
- يكتب reusable components أولاً، قبل النسخ والتكرار.

## UI/UX Designer

- مسؤول عن تنظيم Figma tokens + components.
- يعتمد naming convention (F* for components, T* for tokens).
- يصدر assets وفق strategy في `ui-guidelines.md`.

## Tester

- يراجع الـ features وفق checklist النهائي.
- يستخدم Postman للـ endpoints قبل الموافقة على feature.
- يسجل bugs في ClickUp/Scrum board.

## Backend

- يلتزم بعقود الـ APIs المتفق عليها في `api-guidelines.md`.
- لا يغيّر response shapes دون تحديث الـ contract.
