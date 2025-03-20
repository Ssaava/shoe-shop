import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "/images/boots.jpg";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { SlClose } from "react-icons/sl";
import { useProductCount } from "@/assets/utils.tsx";
import { products } from "@/assets/data";
import AddButton from "@/components/admin-components/AddButton.tsx";

const Cart = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { productCounts, handleProductCount } = useProductCount();
  const handleOpenCart = () => {
    setOpenCart((prev) => !prev);
  };
  const cart = true;
  return (
    <div className={"z-50"}>
      <button
        type="button"
        title="Open Cart Drawer"
        onClick={handleOpenCart}
        className={"flex gap-2 items-center"}
      >
        {/*<p>$116.00</p>*/}
        <div className={"relative"}>
          <ShoppingBag />
          <p
            className={
              "absolute -top-3 -right-2 bg-red-500 h-5 w-5 center-items rounded-full text-sm text-white"
            }
          >
            2
          </p>
        </div>
      </button>
      <div
        onClick={handleOpenCart}
        className={`fixed right-0 top-0 bottom-0 left-0 ${
          openCart ? "bg-[rgba(0,0,0,.3)]" : "translate-x-full duration-200"
        } w-full`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed right-0 top-0 bottom-0 shadow-lg shadow-blue-1 ${
            openCart ? "bg-white" : "translate-x-full"
          } max-w-[40rem] w-full duration-300 flex flex-col`}
        >
          <div
            className={
              "flex items-center justify-between section border-b-[1px]"
            }
          >
            <h3 className={"text-lg"}>Shopping Cart</h3>
            <button
              type="button"
              title="Close Cart Drawer"
              onClick={handleOpenCart}
              className={"text-2xl"}
            >
              <CgClose />
            </button>
          </div>
          {cart && (
            <div
              className={"flex-1 section flex flex-col gap-6 overflow-y-scroll"}
            >
              {products.slice(0, 4).map(({ id }) => (
                <div key={id} className={"flex items-center gap-4 flex-wrap"}>
                  <div className={"flex-1 flex items-center gap-4"}>
                    <div className={"h-14 w-14 bg-gray-300"}>
                      <img
                        src={logo}
                        alt={"Image Logo"}
                        className={"block w-full h-full object-cover"}
                      />
                    </div>
                    <div className={"flex flex-col gap-2"}>
                      <h3>Air Pro X3 Green - 9</h3>
                      <div className={"grid grid-cols-3"}>
                        <button
                          type="button"
                          title="Reduce Product Count"
                          onClick={() => handleProductCount(id, "minus")}
                          className={
                            "center-items bg-gray-200 border-[1px] border-gray-300 px-3 py-1"
                          }
                        >
                          <Minus />
                        </button>
                        <p
                          className={
                            "center-items bg-gray-200 border-[1px] border-gray-300 px-3 py-1"
                          }
                        >
                          {productCounts[id] || 0}
                        </p>
                        <button
                          type="button"
                          title="Inrease Product Count"
                          onClick={() => handleProductCount(id, "add")}
                          className={
                            "center-items bg-gray-200 border-[1px] border-gray-300 px-3 py-1"
                          }
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={"flex flex-col items-center gap-2"}>
                    <button type="button" title="close cart drawer">
                      <SlClose
                        className={"text-lg text-gray-400 hover:text-red-400"}
                      />
                    </button>
                    <p>$116.00</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!cart && (
            <>
              <div className={"center-items w-full h-full text-gray-8"}>
                No Items in the cart
              </div>

              <div className={"vertical-spacing section"}>
                <Link
                  onClick={handleOpenCart}
                  to={"/shop"}
                  className={
                    "w-full rounded-3xl bg-gray-200 hover:bg-primary hover:text-white duration-300 font-light px-6 py-3 text-center"
                  }
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
          {/*Checkout*/}
          {cart && (
            <div className={"mt-auto flex flex-col gap-6"}>
              <div
                className={
                  "section flex gap-4 items-center justify-between border-y-[1px]"
                }
              >
                <p>Subtotal:</p>
                <p>$116.00</p>
              </div>
              <div className={"vertical-spacing section"}>
                <AddButton
                  title={"View Cart"}
                  link={"/cart"}
                  onclick={handleOpenCart}
                  icon={false}
                />
                <AddButton
                  title={"Checkout"}
                  link={"/checkout"}
                  onclick={handleOpenCart}
                  icon={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
