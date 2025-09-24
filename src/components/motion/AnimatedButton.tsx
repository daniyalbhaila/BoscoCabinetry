import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function AnimatedButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
}: AnimatedButtonProps) {
  const variants = {
    primary: "bg-brand-primary hover:bg-brand-bronze text-white",
    secondary: "bg-brand-accent hover:bg-brand-blush text-brand-charcoal",
    outline:
      "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-charcoal",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
