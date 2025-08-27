"use client";
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  return (
    <nav className="py-5 border-b border-b-slate-400 !flex items-center justify-between">
      <Link href="/" className="text-4xl font-bold">
        Blog<span className="text-chart-1">Maan</span>
      </Link>

      <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </ul>

      {user ? (
        <div className="flex items-center gap-6">
          <p>{user.given_name}</p>
          <LogoutLink className="border border-black px-4 py-2 rounded-md">
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="space-x-6">
          <LoginLink className="!bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Login
          </LoginLink>

          <RegisterLink className="border border-black px-4 py-2 rounded-md">
            Sign Up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
