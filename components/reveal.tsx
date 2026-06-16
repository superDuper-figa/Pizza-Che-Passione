import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div"
}: RevealProps) {
  const Component = as;

  return (
    <Component
      className={`reveal ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}
