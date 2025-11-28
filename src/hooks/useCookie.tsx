import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

function useCookie(
  key: string,
  defaultValue: string = "",
  options?: CookieOptions
): [string, (newValue: string) => void, () => void] {
  const [value, setValue] = useState<string>(() => {
    return Cookies.get(key) || defaultValue;
  });

  useEffect(() => {
    if (value) {
      Cookies.set(key, value, options);
    } else {
      Cookies.remove(key, { path: options?.path });
    }
  }, [value, key, options]);

  const removeCookie = () => {
    Cookies.remove(key, { path: options?.path });
    setValue("");
  };

  return [value, setValue, removeCookie];
}

export default useCookie;
