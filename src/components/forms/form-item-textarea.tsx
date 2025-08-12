import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { type UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormItemTextareaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  showError?: boolean;
  labelClassName?: string;
  inputControlClassName?: string;
}

export default function FormItemTextarea({
  form,
  name,
  label,
  placeholder,
  className,
  showError = false,
  labelClassName,
  inputControlClassName,
  ...props
}: FormItemTextareaProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel className={cn("text-button-background", labelClassName)}>
              {label}
            </FormLabel>
          )}{" "}
          <FormControl className={inputControlClassName}>
            <Textarea
              {...props}
              className="resize-none"
              placeholder={placeholder}
              {...field}
              rows={4}
            />
          </FormControl>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  );
}
