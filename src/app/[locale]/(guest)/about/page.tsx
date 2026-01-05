"use client";
import React from "react";
import GuestTemplate from "@/components/templates/GuestLayout";
import { UserList } from "@/modules/users/components/UsersList";
import { UserFrom } from "@/modules/users/components/UserForm";
import CreateUserForm from "@/modules/users/components/CreateUserForm";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  return (
    <GuestTemplate>
      <UserList />
      <UserFrom id={1} />
      <CreateUserForm onSuccess={() => router.push("/")} />
    </GuestTemplate>
  );
}

export default Page;
