"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  return (
    <main>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {JSON.stringify(data, null, 2)}
      </div>
    </main>
  );
}