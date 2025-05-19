import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "base" | "lg" | "xl" | "xxl";
  className?: string;
}

export function GradientHeading({
  children,
  variant = "primary",
  size = "base",
  className,
}: GradientHeadingProps) {
  const gradientClasses = {
    primary: "from-accent-purple via-accent-cyan to-accent-blue",
    secondary: "from-accent-yellow via-accent-purple to-accent-pink",
  };

  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
    xxl: "text-2xl md:text-4xl lg:text-5xl",
  };

  return (
    <h2
      className={cn(
        "bg-gradient-to-r bg-clip-text font-bold text-transparent",
        gradientClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </h2>
  );
}