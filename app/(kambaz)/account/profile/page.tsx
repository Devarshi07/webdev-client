"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);
  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };
  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="w-full max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        id="wd-username"
        placeholder="username"
        aria-label="Username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        id="wd-password"
        placeholder="password"
        type="password"
        aria-label="Password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        placeholder="First Name"
        id="wd-firstname"
        aria-label="First Name"
        className="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        placeholder="Last Name"
        id="wd-lastname"
        aria-label="Last Name"
        className="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        value={profile.dob ?? ""}
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        type="date"
        id="wd-dob"
        aria-label="Date of birth"
        className="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        type="email"
        id="wd-email"
        aria-label="Email"
        className="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <select
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        id="wd-role"
        aria-label="Role"
        className="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        id="wd-update-profile"
        className="mb-2 rounded bg-green-600 px-3 py-2 text-white"
        onClick={() => setCurrentUser(profile)}
      >
        Update
      </button>
      <button
        type="button"
        id="wd-signout-btn"
        onClick={signout}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign out
      </button>
    </div>
  );
}
