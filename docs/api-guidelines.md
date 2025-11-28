# API & Axios Guidelines

- Use `services/apiClient.ts` as the only axios instance.
- Use interceptors for token injection & refresh logic.
- All endpoints live in `services/feature.service.ts`.
- Define types for every response (DTO pattern).
- React Query keys: ['feature', id].
- Never hardcode baseURL – use from config.
- Handle 401 globally – do not catch in every component.
