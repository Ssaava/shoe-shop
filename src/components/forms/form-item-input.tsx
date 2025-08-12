import usePasswordToggle from "@/assets/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { type UseFormReturn } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router-dom";

interface FormItemInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  showError?: boolean;
  labelClassName?: string;
  inputControlClassName?: string;
  isRequired?: boolean;
  link?: string;
}

export default function FormItemInput({
  form,
  name,
  label,
  placeholder,
  type = "text",
  className,
  showError = false,
  labelClassName,
  isRequired = false,
  inputControlClassName,
  link,
  ...props
}: FormItemInputProps) {
  const { showPassword, handleShowPassword } = usePasswordToggle();
  if (type == "date")
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={className}>
            {label && (
              <FormLabel
                className={cn("text-button-background", labelClassName)}
              >
                {label}{" "}
                {isRequired && (
                  <span className={"ml-1 text-sm text-secondary"}>*</span>
                )}
              </FormLabel>
            )}
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className={inputControlClassName}>
                  <Button
                    variant={"outline"}
                    type="button"
                    className={cn(
                      "pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  {...props}
                  captionLayout="dropdown"
                />
              </PopoverContent>
            </Popover>
            {showError && <FormMessage />}
          </FormItem>
        )}
      />
    );

  if (type === "password") {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={className}>
            <FormLabel
              className={cn(
                "text-button-background flex items-center justify-between gap-2 flex-wrap",
                labelClassName
              )}
            >
              <p>
                {label}
                {isRequired && (
                  <span className={"ml-1 text-sm text-secondary"}>*</span>
                )}
              </p>

              {link && (
                <Link to={link} className={"text-sm text-blue-5"}>
                  Forgot Password?
                </Link>
              )}
            </FormLabel>
            <FormControl className={inputControlClassName}>
              <div className="relative">
                <Input
                  {...props}
                  type={showPassword ? "text" : "password"}
                  placeholder={placeholder}
                  className="pr-10"
                  {...field}
                />

                <span
                  onClick={handleShowPassword}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <LuEyeOff className={"text-2xl text-gray-3"} />
                  ) : (
                    <LuEye className={"text-2xl text-gray-3"} />
                  )}
                </span>
              </div>
            </FormControl>
            {showError && <FormMessage />}
          </FormItem>
        )}
      />
    );
  }
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className={cn("text-button-background", labelClassName)}>
            {label}
            {isRequired && (
              <span className={"ml-1 text-sm text-secondary"}>*</span>
            )}
          </FormLabel>
          <FormControl className={inputControlClassName}>
            <Input
              {...props}
              placeholder={placeholder}
              type={type}
              {...field}
            />
          </FormControl>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  );
}
