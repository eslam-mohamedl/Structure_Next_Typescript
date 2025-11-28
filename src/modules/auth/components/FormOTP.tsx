"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

function FormOTP() {
  const t = useTranslations();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [timer, setTimer] = useState(30);
  // const email = localStorage.getItem("resetEmail") || "";

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };
  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const otpCode = otp.join("");
  //   if (otpCode.length !== 6) return;
  //   localStorage.setItem("resetOtp", otpCode);
  // };
  // const handleResend = () => {
  //   setOtp(["", "", "", "", "", "", ""]);
  //   inputRef.current[0].focus();
  //   setTimer(30);

  //   if (!email) return alert("no Email found!");
  //   console.log("Resending OTP for email:", email);
  // };

  return (
    <div className="grid min-h-screen grid-cols-1 gap-8 md:grid-cols-2">
      <div className="left-From container flex flex-col items-center justify-center px-[100px] pt-[50px]">
        <div className="mt-[50px] w-full">
          <Title className="mb-[10px]" size="lg" variant="main">
            {t("auth.OTPVerify.title")}
          </Title>
          <Text className="container py-4 font-normal" size="lg" variant="gray">
            {t("auth.OTPVerify.subtitle")}
          </Text>
        </div>
        <div className="mb-4 flex gap-4">
          {otp.map((value, idx) => (
            <input
              key={idx}
              maxLength={1}
              value={value}
              ref={el => {
                inputRef.current[idx] = el!;
              }}
              onChange={e => handleChange(idx, e.target.value)}
              onKeyDown={e => handleBackspace(idx, e)}
              className="text-dark dark:bg-dark-secondary focus:ring-primary h-[25px] w-[25px] rounded-lg bg-white text-center focus:ring-2 focus:outline-none md:h-[50px] md:w-[50px] dark:text-white"
            />
          ))}
        </div>
        <div className="mb-4">
          <span className="dark:text-gray-500">00:{timer}s</span>
        </div>

        <Link className="text-primary mb-4 text-center" href="/">
          {t("auth.OTPVerify.message")}
        </Link>
        <div className="w-full">
          <Button fullWidth={true}>{t("auth.OTPVerify.btn")}</Button>
        </div>
      </div>
      <div className="right-img relative mt-[80px] h-[88%] w-full">
        <Image src="/assets/images/auth/Login-img.png" alt="login" fill priority />
      </div>
    </div>
  );
}

export default FormOTP;
