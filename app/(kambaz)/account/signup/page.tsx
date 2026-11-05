"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = () => {
    if (!username || !password) return;
    setCurrentUser({
      _id: crypto.randomUUID(),
      username,
      password,
      firstName: "",
      lastName: "",
      email: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    });
    router.push("/account/profile");
  };
  return (
    <div id="wd-signup-screen" className="w-full max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        aria-label="Username"
        placeholder="username"
        id="wd-username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="wd-username mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        aria-label="Password"
        placeholder="password"
        type="password"
        id="wd-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="wd-password mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        aria-label="Verify password"
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <button
        type="button"
        id="wd-signup-btn"
        onClick={signup}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign up
      </button>
      <Link
        id="wd-signin-link"
        href="/account/signin"
        className="text-blue-600"
      >
        Sign in
      </Link>
    </div>
  );
}
