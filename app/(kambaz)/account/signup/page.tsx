import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="w-full max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        aria-label="Username"
        placeholder="username"
        defaultValue="ada"
        className="wd-username mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        aria-label="Password"
        placeholder="password"
        type="password"
        defaultValue="123"
        className="wd-password mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <input
        aria-label="Verify password"
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />
      <Link
        href="/account/profile"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign up
      </Link>
      <Link href="/account/signin" className="text-blue-600">
        Sign in
      </Link>
    </div>
  );
}
