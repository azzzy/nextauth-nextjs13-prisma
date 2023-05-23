"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn('auth0')}>
      Sign in
    </button>
  );
};

export const LogoutButton = ({name = ''}: {name: string | undefined}) => {
  return (
    <button onClick={() => signOut()}>Sign Out {name}</button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
