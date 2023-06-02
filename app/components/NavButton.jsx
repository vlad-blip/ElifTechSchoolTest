"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({ href, children }) {
  const pathname = usePathname();

  const activeClass = "font-bold outline";
  const defaultClass = "text-xl bg-blue-200 px-5 py-3 rounded-md";
  return (
    <Link
      href={href}
      className={`${
        pathname === href ? activeClass : defaultClass
      } ${defaultClass}`}
    >
      {children}
    </Link>
  );
}
