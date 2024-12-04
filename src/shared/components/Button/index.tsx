import { cn } from "~/shared/lib"

export function Button({ className, children, ...props }: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn("rounded bg-blue-500 px-2 py-0.5 text-white", className)} {...props}>
      {children}
    </button>
  )
}
