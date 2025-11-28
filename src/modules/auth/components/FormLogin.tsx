"use client";
import React from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import InputForm from "@/components/atoms/InputForm";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function FormLogin() {
  const t = useTranslations();
  const Locale = useLocale();
  return (
    <div className="grid min-h-screen grid-cols-1 gap-8 md:grid-cols-2">
      <div className="left-From container flex flex-col items-center justify-center px-[100px] pt-[50px]">
        <div className="mt-[50px] w-full">
          <Title className="mb-[10px]" size="lg" variant="main">
            {t("auth.login.title")}
          </Title>
          <Text className="container py-4 font-normal" size="lg" variant="main">
            {t("auth.login.subtitle")}
          </Text>
        </div>
        <InputForm className="mb-7" type="email" placeholder={t("auth.login.inputEmail")} />
        <InputForm type="password" placeholder={t("auth.login.inputPassword")} />
        <div className="flex w-full flex-row items-center justify-between py-3">
          <div className="flex items-center justify-between gap-2">
            <input className="h-[17px] w-[17px]" type="checkbox" />
            <p>{t("auth.login.checkBox")}</p>
          </div>
          <Link className="text-primary" href={`/${Locale}/forget-password`}>
            {t("auth.login.forget")}
          </Link>
        </div>
        <div className="w-full">
          <Button fullWidth={true}>{t("auth.login.btn")}</Button>
        </div>
      </div>
      <div className="right-img relative mt-[80px] h-[88%] w-full">
        <Image src="/assets/images/auth/Login-img.png" alt="login" fill priority />
      </div>
    </div>
  );
}

export default FormLogin;
