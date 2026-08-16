import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavLink({
  href,
  children,
  isActive,
  className,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors relative group",
        isActive && "theme-nav-link-active",
        className
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--theme-accent)] transition-all group-hover:w-full" />
    </Link>
  );
}
