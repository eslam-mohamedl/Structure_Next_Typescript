const TOKEN_KEY = "app_token";
// Auth مهم في أي مشروع  Token + Local Storage Helpers
export const storage = {
  setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  getToken: () => localStorage.getItem(TOKEN_KEY),
  removeToken: () => localStorage.removeItem(TOKEN_KEY),

  set: (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value)),
  get: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove: (key: string) => localStorage.removeItem(key),
};
