"use client";
import React from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import InputForm from "@/components/atoms/InputForm";
import Button from "@/components/atoms/Button";
import { useTranslations } from "next-intl";

function FormForgetPassword() {
  const t = useTranslations();
  return (
    <div className="grid min-h-screen grid-cols-1 gap-8 md:grid-cols-2">
      <div className="left-From container flex flex-col items-center justify-center px-[100px] pt-[50px]">
        <div className="mt-[50px] w-full">
          <Title className="mb-[10px]" size="lg" variant="main">
            {t("auth.forget.title")}
          </Title>
          <Text className="container py-4 font-normal" size="lg" variant="gray">
            {t("auth.forget.subtitle")}
          </Text>
        </div>
        <InputForm className="mb-7" type="email" placeholder={t("auth.login.inputEmail")} />

        <div className="w-full">
          <Button fullWidth={true}>{t("auth.forget.btn")}</Button>
        </div>
      </div>
      <div className="right-img relative mt-[80px] h-[88%] w-full">
        <Image src="/assets/images/auth/Login-img.png" alt="login" fill priority />
      </div>
    </div>
  );
}
export default FormForgetPassword;
