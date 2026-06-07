import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

/**
 * LogoCloud component following Shadcn UI conventions.
 * UI components are kept in components/ui to separate them from feature-specific components.
 */
export function LogoCloud({ className, ...props }: LogoCloudProps) {
  const logos = [
    { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
    { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
    { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
    { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
    { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
    { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk Logo" },
    { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
    { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  ];

  return (
    <div className="relative overflow-hidden md:overflow-visible">
      {/* Mobile Carousel / Desktop Grid */}
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -400 }}
        className={cn(
          "flex md:grid md:grid-cols-4 border-zinc-800 cursor-grab active:cursor-grabbing md:cursor-default",
          className,
        )}
        style={{ touchAction: "pan-y" }}
        {...(props as any)}
      >
        <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-zinc-800 hidden md:block" />

        {logos.map((logo, i) => (
          <LogoCard
            key={i}
            className={cn(
              "flex-shrink-0 w-[200px] md:w-auto border-r border-zinc-800",
              i < 4 ? "border-b" : "",
              (i % 2 === 0 && i < 6) || i === 1 || i === 4 ? "bg-zinc-900/50" : "bg-transparent",
              "md:border-b md:bg-transparent",
            )}
            logo={logo}
          >
            <div className="hidden md:block">
              {i === 0 && (
                <PlusIcon
                  className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-zinc-700"
                  strokeWidth={1}
                />
              )}
              {i === 2 && (
                <>
                  <PlusIcon
                    className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-zinc-700"
                    strokeWidth={1}
                  />
                  <PlusIcon
                    className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 text-zinc-700 md:block"
                    strokeWidth={1}
                  />
                </>
              )}
            </div>
          </LogoCard>
        ))}

        <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-zinc-800 hidden md:block" />
      </motion.div>
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn("flex items-center justify-center bg-transparent px-4 py-8 md:p-8", className)}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5 brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
