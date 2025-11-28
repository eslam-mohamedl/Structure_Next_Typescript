import React from "react";
import { requireRole } from "@/guards/requireRole";
import { ROLES } from "@/utils/constants";

export default async function Dashboard() {
  const user = await requireRole(ROLES.ADMIN);

  return <div>Welcome {user.name}</div>;
}
