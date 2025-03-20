import { products } from "@/assets/data.ts";
import { gradientBackground } from "@/assets/utils.tsx";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RelatedProducts from "@/components/user-components/RelatedProducts";
import Review from "@/components/user-components/Review";
import SizeSelector from "@/components/user-components/SizeSelector";
import TabsSwitch from "@/components/user-components/TabsSwitch";
import "@smastrom/react-rating/style.css";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const UserProduct = () => {
  const [activeTab, setActiveTab] = useState<string>("description");
  const [count, setCount] = useState<number>(1);
  const [cartItem, setCartItem] = useState({
    productId: "",
    size: 0,
    quantity: 0,
  });
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const productCategory = product?.category;
  const productBrand = product?.brand;
  const productName = product?.name;
  const relatedProducts = products.filter(
    (product) =>
      (product.category === productCategory ||
        product.brand === productBrand) &&
      product.name !== productName
  );
  useEffect(() => {
    setCartItem((prev) => ({
      ...prev,
      productId: product?.id ?? "",
    }));
  }, [product?.id]);
  const sizes = [10, 7, 8, 9]; // this should be dynamic together with the product items data returned
  const handleActiveTab = (value: string) => {
    setActiveTab(value);
  };

  const handleCount = (action: "add" | "subtract") => {
    if (action === "add") {
      setCount((prev) => prev + 1);
      setCartItem((prev) => ({
        ...prev,
        quantity: prev.quantity + 1,
      }));
    } else if (action === "subtract" && count > 1) {
      setCount((prev) => prev - 1);
      setCartItem((prev) => ({
        ...prev,
        quantity: prev.quantity - 1,
      }));
    }
  };
  const handleSelectSize = (size: number) => {
    setCartItem((prev) => ({
      ...prev,
      size: size,
    }));
  };

  const handleAddToCart = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // write submit logic here
    console.log(cartItem);
  };

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(cartItem);
  return (
    <>
      <div className={"inline-padding bg-[#F2F4F6] py-16"}>
        <div className={"bg-white p-4 md:p-24"}>
          <div className={"grid lg:grid-cols-2 mb-8"}>
            <div style={gradientBackground} className={"relative"}>
              <div
                className={
                  "w-full h-full overflow-hidden flex items-center justify-center group"
                }
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="duration-500 ease-in-out transform group-hover:scale-150"
                />
              </div>

              <Dialog>
                <DialogTrigger
                  className={
                    "bg-white rounded-full h-10 w-10 p-2 absolute top-4 right-4"
                  }
                  aria-label="Zoom image"
                >
                  <Search />
                </DialogTrigger>
                <DialogContent>
                  <div
                    className={
                      "bg-white max-w-[45rem] max-h-[45rem] h-full w-full"
                    }
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={"block w-full h-auto"}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className={"md:px-8 vertical-spacing"}>
              <p className={"text-primary text-lg"}>{product.category}</p>
              <h2 className={"text-3xl font-extrabold"}>{product.name}</h2>
              <div className={"flex items-center gap-4"}>
                <p className={"text-primary text-2xl font-bold"}>
                  {product.price}
                </p>
                <p>+ free shipping</p>
              </div>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit
                sed.
              </p>
              <SizeSelector
                cartItemSize={cartItem.size}
                sizes={sizes}
                handleSelectSize={handleSelectSize}
              />
              <div className={"border-y-[1px] py-4 flex items-center gap-4"}>
                <div className={"grid grid-cols-3 items-center"}>
                  <button
                    onClick={() => handleCount("subtract")}
                    aria-label="Decrease quantity"
                    className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}
                  >
                    <AiOutlineMinus />
                  </button>
                  <button
                    aria-label={`Quantity: ${cartItem.quantity}}`}
                    className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}
                  >
                    {cartItem.quantity}
                  </button>
                  <button
                    onClick={() => handleCount("add")}
                    aria-label="Increase quantity"
                    className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}
                  >
                    <IoAddOutline />
                  </button>
                </div>
                <form onSubmit={handleAddToCart}>
                  <SubmitButton
                    title={"ADD TO CART"}
                    className={"!py-2 !text-base"}
                  />
                </form>
              </div>
              <div className={"flex items-center gap-4 text-sm mb-8"}>
                <p>
                  SKU: {""}
                  <span className={"text-gray-8"}>NA</span>
                </p>
                <p>
                  Category:{" "}
                  <span className={"text-gray-8"}>{product.category}</span>
                </p>
              </div>
            </div>
          </div>

          <TabsSwitch activeTab={activeTab} handleActiveTab={handleActiveTab} />

          <div className={`${activeTab === "description" ? "mt-4" : "hidden"}`}>
            <p className={"text-gray-8"}>
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
              condimentum sit amet a augue. Sed non neque elit sed.
            </p>
          </div>

          <div
            className={`${
              activeTab === "additional-information" ? "mt-4" : "hidden"
            }`}
          >
            <div className={"grid grid-cols-12 text-sm text-gray-8"}>
              <div className={"col-span-2 border-y border-s px-6 py-2"}>
                Size
              </div>
              <div className={"col-span-10 border px-6 py-2"}>
                <p>{sizes?.join(", ")}</p>{" "}
              </div>
            </div>
          </div>

          <Review activeTab={activeTab} />
          <RelatedProducts relatedProducts={relatedProducts} />
        </div>
      </div>
    </>
  );
};

export default UserProduct;
