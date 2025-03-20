import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ShopNowButton({
  title,
  icon = "right",
  className,
}: {
  title: string;
  icon?: string;
  className?: string;
}) {
  return (
    <>
      <Link
        to={"shop"}
        reloadDocument
        className={`${className} z-10 rounded-3xl bg-primary shadow-2xl text-white font-medium px-6 py-3 w-fit mt-auto mx-auto flex items-center gap-4 hover:bg-green-5 hover:text-white duration-300`}
      >
        {icon === "left" && <FaArrowRight />}
        {title}
        {icon === "right" && <FaArrowRight />}
      </Link>
    </>
  );
}

export default ShopNowButton;
