import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  currencyFormat,
  extractNum,
  gradientBackground,
  useProductCount,
} from "@/assets/utils.tsx";
import { products } from "@/assets/data.ts";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";

const CartTable = () => {
  const { productCounts, handleProductCount } = useProductCount();
  return (
    <>
      <div className={"w-full"}>
        <Table className={"border"}>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className={"bg-[#F2F4F6]"}>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Sub Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.slice(0, 3).map(({ id, name, image, price }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">
                  <div className={"flex items-center gap-4"}>
                    <button title="Delete item">
                      <TiDeleteOutline
                        className={
                          "text-3xl text-gray-3 hover:text-red-500 duration-300"
                        }
                      />
                    </button>
                    <Link
                      to={`/product/${id}`}
                      className={"flex items-center gap-4"}
                    >
                      <div
                        className={
                          "min-h-16 min-w-16 h-16 w-16 center-items p-2"
                        }
                        style={gradientBackground}
                      >
                        <img src={image} alt={name} />
                      </div>
                      <h2 className={"text-blue-5 font-light"}>{name}</h2>
                    </Link>
                  </div>
                </TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>
                  <div className={"grid grid-cols-3 items-center w-fit"}>
                    <button
                      onClick={() => handleProductCount(id, "minus")}
                      className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}
                      title="Decrease quantity"
                    >
                      <AiOutlineMinus />
                    </button>
                    <button
                      className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}
                      title="Current quantity"
                    >
                      {productCounts[id] || 1}
                    </button>
                    <button
                      onClick={() => handleProductCount(id, "add")}
                      className={"py-1 px-3 border-[1px] h-full w-[2.75rem]"}
                      title="Increase quantity"
                    >
                      <IoAddOutline />
                    </button>
                  </div>
                </TableCell>
                <TableCell>
                  {currencyFormat(extractNum(price) * (productCounts[id] || 1))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CartTable;
