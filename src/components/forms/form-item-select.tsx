/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { FieldPath, UseFormReturn } from "react-hook-form";

interface FormSelectProps {
  form: UseFormReturn<any>;
  options: readonly { label: string; value: string }[];
  name: FieldPath<any>;
  label?: string;
  labelClassName?: string;
  inputControlClassName?: string;
  className?: string;
  placeholder?: string;
}
const FormItemSelect = ({
  form,
  options,
  name,
  label,
  placeholder,
  className,
  inputControlClassName,
  labelClassName,
}: FormSelectProps) => {
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
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className={inputControlClassName}>
              <SelectTrigger className="max-w-[20rem] w-full">
                <SelectValue placeholder={placeholder || "Select a value"} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="w-[var(--radix-select-trigger-width)]">
              {options.map(({ value, label }, index) => (
                <SelectItem value={value} key={index}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default FormItemSelect;
