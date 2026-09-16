import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "light",
  className,
  href = "/",
}: {
  variant?: "light" | "dark";
  className?: string;
  href?: string | null;
}) {
  const src =
    variant === "dark"
      ? "/brand/carpsync-primary-white-lime.svg"
      : "/brand/carpsync-light-charcoal-lime.svg";

  const image = (
    <Image
      src={src}
      alt="CarpSync"
      width={160}
      height={40}
      priority
      className={cn("h-8 w-auto", className)}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} aria-label="CarpSync home" className="inline-flex shrink-0">
      {image}
    </Link>
  );
}
