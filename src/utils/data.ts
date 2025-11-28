// src/utils/data.ts

/**
 * Convert an object to a query string.
 * - Ignores keys with `null` or `undefined`.
 * - Returns empty string when there are no valid params.
 */
export const toQueryString = (
  params: Record<string, string | number | boolean | null | undefined>
): string => {
  const parts = Object.entries(params)
    .filter(([, value]) => value !== null && value !== undefined)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

  return parts.length ? `?${parts.join("&")}` : "";
};

/**
 * Normalize a list: ensure each item has an `id` (string | number).
 * - idKey can be any property name that may already exist on the item.
 * - If the idKey is missing, we generate a fallback numeric id (index + 1).
 */
export const normalizeList = <T extends Record<string, unknown>>(
  list: T[],
  idKey = "id"
): Array<T & { id: string | number }> =>
  list.map((item, index) => {
    const maybeId = (item as Record<string, unknown>)[idKey];
    return {
      ...item,
      id: (maybeId as string | number) ?? index + 1,
    };
  });

/**
 * Safely read a nested path like "user.address.city".
 * - Returns defaultValue if any step is missing.
 * - Does not throw, works with non-object intermediate values.
 */
export const safeGet = <T, R = unknown>(obj: T, path: string, defaultValue: R): R | unknown => {
  if (!path) return defaultValue;

  const parts = path.split(".").filter(Boolean);
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || current === undefined) return defaultValue;

    if (typeof current !== "object") return defaultValue;

    current = (current as Record<string, unknown>)[part];
  }

  return current === undefined ? defaultValue : (current as R);
};

/**
 * Remove keys with null or undefined from an object.
 * - Returns a Partial<T> because some keys may be removed.
 * - Shallow only (does not deep-clean nested objects).
 */
export const cleanObject = <T extends Record<string, unknown>>(obj: T): Partial<T> => {
  const entries = Object.entries(obj).filter(([, v]) => v !== null && v !== undefined);
  return Object.fromEntries(entries) as Partial<T>;
};
