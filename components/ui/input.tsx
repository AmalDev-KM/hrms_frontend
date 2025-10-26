import * as React from "react";
import { cn } from "@/lib/utils";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> extends React.ComponentProps<"input"> {
  formHook: UseFormReturn<T>; // renamed to avoid conflict
  name: Path<T>;
}

export function Input<T extends FieldValues>({
  formHook,
  name,
  className,
  type,
  ...props
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
  } = formHook;

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="w-full">
      <input
        type={type}
        data-slot="input"
        aria-invalid={!!error}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...register(name)}
        {...props}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
