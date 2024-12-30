"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            HV
          </Link>
          
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button - implement dropdown later */}
          <button className="md:hidden">
            <span className="sr-only">Open menu</span>
            {/* Add menu icon */}
          </button>
        </div>
      </div>
    </nav>
  );
} 