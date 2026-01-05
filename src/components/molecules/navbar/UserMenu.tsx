"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { User, ChevronDown, ChevronUp } from "../../../../public/assets/icons/icons";
import LanguageButton from "@/components/atoms/LanguageButton";
import ThemeButton from "@/components/atoms/ThemeButton";
import { useProfile } from "@/modules/auth/hooks/useProfile";
import { useLogOut } from "@/modules/auth/hooks/useLogout";
import Cookies from "js-cookie";
import { ENV } from "@/config/env";

interface props {
  className: string;
}

export default function UserMenu({ className }: props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const token = Cookies.get(ENV.ACCESS_TOKEN_KEY);
  const { data: profile, isLoading } = useProfile();
  const logout = useLogOut();

  const firstLetter = profile?.email ? profile.email.charAt(0).toUpperCase() : "?";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Main Button */}
      <button
        onClick={() => setOpen(p => !p)}
        className="ds-bg-primary flex items-center gap-2 rounded-md px-5 py-3 transition hover:opacity-90"
      >
        <User className="h-5 w-5 text-white" />
        {open ? (
          <ChevronUp className="h-4 w-4 text-white" />
        ) : (
          <ChevronDown className="h-4 w-4 text-white" />
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={cn(
            "ds-bg-alt absolute end-0 mt-2 w-60 cursor-pointer rounded-sm shadow-lg",
            className
          )}
        >
          <div className="flex flex-col gap-2">
            {/* User Info */}
            {token && !isLoading && profile ? (
              <div className="dark:border-dark-secondary flex items-center gap-3 border-b border-gray-200 px-3 py-2">
                <div className="ds-bg-primary flex h-9 w-9 items-center justify-center rounded-full font-bold text-white">
                  {firstLetter}
                </div>
                <span className="truncate text-sm">{profile.email}</span>
              </div>
            ) : (
              <div className="flex flex-col gap-2 p-2">
                <Link
                  href="/sign-in"
                  className="ds-rounded-sm ds-bg-primary px-4 py-2 text-center text-white transition hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>

                <Link
                  href="/sign-up"
                  className="ds-rounded-sm ds-bg-secondary px-4 py-2 text-center text-white transition hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  Register
                </Link>

                <hr className="ds-border-muted my-2" />
              </div>
            )}

            {/* Theme Toggle */}
            <div className="w-full">
              <ThemeButton />
            </div>

            {/* Language Toggle */}
            <div>
              <LanguageButton />
            </div>

            {/* Logout */}
            {token && !isLoading && profile && (
              <div
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="ds-bg-primary flex cursor-pointer items-center gap-3 px-3 py-2 text-white transition"
              >
                <span>Logout</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
