import React from "react";
import { requireRole } from "@/guards/requireRole";
import { ROLES } from "@/utils/constants";
import GuestTemplate from "@/components/templates/GuestTemplate";

export default async function Dashboard() {
  const user = await requireRole(ROLES.ADMIN);

  return (
    <GuestTemplate>
      <div>Welcome {user.name}</div>;
    </GuestTemplate>
  );
}
