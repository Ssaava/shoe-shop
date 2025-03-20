import CartTable from "@/components/user-components/CartTable.tsx";
import AddButton from "@/components/admin-components/AddButton.tsx";

const Cart = () => {
  return (
    <div className={"bg-[#F2F4F6]"}>
      <div className={"inline-padding py-6"}>
        <div className={"bg-white p-4 md:p-24 vertical-spacing"}>
          <h2 className={"text-3xl font-extrabold text-secondary"}>Cart</h2>
          <div className={"grid lg:grid-cols-12 gap-8 mt-8"}>
            <div className={"lg:col-span-8"}>
              <CartTable />
            </div>
            <div className={"lg:col-span-4 w-full"}>
              <div className={"border"}>
                <div className={"border-b px-5 py-1 bg-[#F2F4F6]"}>
                  <h3 className={"text-2xl font-extrabold"}>Cart Totals</h3>
                </div>

                <div className={"p-6 vertical-spacing"}>
                  <div className={""}>
                    <div
                      className={
                        "border-b grid grid-cols-2 py-4 text-sm font-light text-gray-8"
                      }
                    >
                      <p>SubTotal</p>
                      <p>127,000shs</p>
                    </div>
                    <div
                      className={
                        "border-b grid grid-cols-2 py-4 text-sm font-light text-gray-8"
                      }
                    >
                      <p>SubTotal</p>
                      <p>127,000shs</p>
                    </div>
                  </div>

                  <AddButton
                    link={"/checkout"}
                    title={"PROCEED TO CHECKOUT"}
                    icon={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <AddButton
            link={"/shop"}
            title={"RETURN TO SHOP"}
            className={"w-fit"}
            icon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
