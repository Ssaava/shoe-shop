import { useProductStore } from "@/store/store";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GoDash } from "react-icons/go";
import { VscSettings } from "react-icons/vsc";
const Filter = () => {
  const products = useProductStore((state) => state.products);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const handleOpenFilter = () => {
    setOpenFilter((prev) => !prev);
  };

  return (
    <>
      <div className={"z-50"}>
        <button
          onClick={handleOpenFilter}
          className={
            "rounded-3xl hover:bg-green-5 hover:text-white bg-[rgba(210,210,210,.7)] w-fit px-6 py-2 flex items-center gap-2 font-medium duration-300"
          }
        >
          <VscSettings />
          Filter
        </button>
        <div
          onClick={handleOpenFilter}
          className={`fixed right-0 top-0 bottom-0 left-0 ${
            openFilter
              ? "bg-[rgba(0,0,0,.3)]"
              : "-translate-x-full duration-200"
          } w-full`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed left-0 top-0 bottom-0 shadow-lg shadow-blue-1 ${
              openFilter ? "bg-white" : "-translate-x-full"
            } max-w-108 w-full duration-300 flex flex-col`}
          >
            <div
              className={"flex items-center justify-between section border-b"}
            >
              <h3 className={"text-lg font-bold"}>Search Products</h3>
              <button onClick={handleOpenFilter} className={"text-2xl"}>
                <CgClose />
              </button>
            </div>
            <div>
              <div className={"section flex items-center gap-1 mt-8"}>
                <input
                  type={"search"}
                  className={
                    "border py-2 px-4 focus-visible:outline-dotted focus-visible:outline-[0.5px]"
                  }
                />
                <button
                  type={"submit"}
                  className={
                    "bg-[rgba(210,210,210,.7)] rounded-3xl py-2 px-6 hover:bg-green-5 hover:text-white"
                  }
                >
                  Search
                </button>
              </div>
              <div className={"section"}>
                <h3 className={"mb-8 text-lg font-bold"}>Product Categories</h3>
                <div className={"flex items-center gap-4 flex-wrap"}>
                  {products.map(({ category }) => (
                    <button type={"submit"} className={"py-2 px-4 border"}>
                      {category?.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className={"section"}>
                <h3 className={"mb-8 text-lg font-bold"}>Filter by Price</h3>
                <div className={"vertical-spacing"}>
                  <div className={"flex items-center justify-between gap-4"}>
                    <button
                      type={"submit"}
                      className={
                        "bg-[rgba(210,210,210,.7)] py-2 px-6 hover:bg-green-5 hover:text-white duration-300 rounded-3xl"
                      }
                    >
                      filter
                    </button>
                    <p className={"text-sm font-light flex items-center gap-2"}>
                      Price:
                      <span className={"font-medium"}>$0</span>
                      <GoDash className={"font-medium"} />
                      <span className={"font-medium"}>$100</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
