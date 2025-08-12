import { Button } from "@/components/ui/button";

const SubmitButton = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <Button
      type={"submit"}
      className={`${className} bg-transparent min-w-36 border border-primary text-primary flex items-center max-w-56 justify-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white hover:border-primary duration-300`}
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
