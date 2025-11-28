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

function FormSignUp() {
  const Locale = useLocale();
  const t = useTranslations();
  return (
    <div className="grid min-h-screen grid-cols-1 gap-8 md:grid-cols-2">
      <div className="left-From container flex flex-col items-center justify-center px-[100px] pt-[50px]">
        <div className="mt-[50px] w-full">
          <Title className="mb-[10px]" size="lg" variant="main">
            {t("auth.register.title")}
          </Title>
          <Text className="container py-4 font-normal" size="lg" variant="main">
            {t("auth.login.subtitle")}
          </Text>
        </div>
        <InputForm className="mb-7" type="text" placeholder={t("auth.register.input1")} />
        <InputForm className="mb-7" type="email" placeholder={t("auth.register.input2")} />
        <InputForm type="password" placeholder={t("auth.register.input3")} />
        <div className="flex w-full flex-row items-center justify-between py-3">
          <div className="flex items-center justify-between gap-2">
            <input className="h-[17px] w-[17px]" type="checkbox" />
            <p>{t("auth.register.text")}</p>
          </div>
        </div>
        <div className="w-full">
          <Button fullWidth={true}>{t("auth.register.btn")}</Button>
        </div>
        <p className="py-4 text-gray-200">
          <span className="text-dark dark:text-gray-300">{t("auth.register.link1")} </span>
          <Link className="text-primary" href={`/${Locale}/sign-in`}>
            {t("auth.register.link2")}
          </Link>
        </p>
      </div>
      <div className="right-img relative mt-[80px] h-[88%] w-full">
        <Image src="/assets/images/auth/Login-img.png" alt="login" fill priority />
      </div>
    </div>
  );
}

export default FormSignUp;
