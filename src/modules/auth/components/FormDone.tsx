"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";
import { Check } from "../../../../public/assets/icons/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";

function FormDone() {
  const Locale = useLocale();
  const t = useTranslations("done");
  return (
    <div className="grid min-h-screen grid-cols-1 gap-8 md:grid-cols-2">
      <div className="m-auto flex max-h-[55%] w-[75%] flex-col items-center justify-center rounded-lg p-7">
        <div className="bg-primary-700 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
          <Check className="dark:text-light-primary text-amber-100" size={27} />
        </div>
        <Title size="lg" className="dark:text-light-primary my-2" variant="main">
          {t("title")}
        </Title>
        <Text className="mt-4 mb-6" size="lg" variant="gray">
          {t("subTitle")}
        </Text>
        <Link href={`/${Locale}/sign-in`}>
          <Button size="lg">{t("btn")}</Button>
        </Link>
      </div>
      <div className="right-img relative mt-[80px] h-[88%] w-full">
        <Image src="/assets/images/auth/Login-img.png" alt="login" fill priority />
      </div>
    </div>
  );
}

export default FormDone;
