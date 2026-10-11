import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account" className="flex flex-col gap-6 md:flex-row">
      <div className="w-[140px] shrink-0">
        <AccountNavigation />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
