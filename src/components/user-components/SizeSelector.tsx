import { Key } from "react";

interface SizeSelectorProps {
  sizes: number[];
  handleSelectSize: (size: number) => void;
  cartItemSize: number;
}

const SizeSelector = ({
  sizes,
  handleSelectSize,
  cartItemSize,
}: SizeSelectorProps) => {
  return (
    <>
      <div className={"flex items-center gap-2 mb-8"}>
        {sizes.map((size: number, index: Key | null | undefined) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSelectSize(size)}
            aria-label={`Size ${size}`}
            className={`${
              size === cartItemSize ? "border-black" : ""
            } py-1 px-3 border-[1px] hover:border-black duration-300`}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  );
};

export default SizeSelector;
