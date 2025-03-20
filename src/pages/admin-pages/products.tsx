import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {brands, products} from "@/assets/data.ts";
import {LuEye} from "react-icons/lu";
import {CiEdit, CiSearch} from "react-icons/ci";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {RiDeleteBinLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import DeleteProduct from "@/components/admin-components/orders-components/DeleteProduct.tsx";
import AddButton from "@/components/admin-components/AddButton.tsx";
const Products = ()=>{
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>Products List</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Products</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
                {/*Top Selling Products*/}
                <div className={"bg-white p-6 rounded-lg vertical-spacing overflow-hidden"}>
                    <div className={"flex items-center justify-between flex-wrap gap-4"}>
                        <div className={"flex gap-4 items-center flex-wrap"}>
                            <form
                                onSubmit={e => e.preventDefault()}
                                className={"rounded-xl border-[1px] px-6 border-gray-[#111111] flex gap-4 items-center"}>
                                <input type={"search"}
                                       placeholder={"search Product..."}
                                       className={"w-full py-2 ring-0 bg-none border-none outline-none"}/>
                                <button type={"submit"} className={"border-none shadow-none"}>
                                    <CiSearch className={"text-2xl"}/>
                                </button>
                            </form>
                            <form
                                onSubmit={e => e.preventDefault()}
                                className={"flex gap-4 items-center"}>
                                <Select>
                                    <SelectTrigger
                                        className="flex items-center justify-center py-5 rounded-lg">
                                        <SelectValue placeholder="Filter Category"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            brands.map(({category})=>(
                                                <SelectItem value={category}>{category}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </form>
                        </div>
                        <AddButton title={"Add New Product"} link={"/admin/add-new-product"}/>
                    </div>
                    <div>
                        <Table className={"min-w-[46rem]"}>
                            <TableHeader>
                                <TableRow className={"font-bold"}>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Total Sales</TableHead>
                                    <TableHead>Availability</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {
                                    products.slice(0, 5).map(({
                                                                  id,
                                                                  image,
                                                                  name,
                                                                  category,
                                                                  price,
                                                                  quantity,
                                                                  totalSales,
                                                                  availability
                                                              }) => (
                                        <TableRow key={id} className={"text-gray-8"}>
                                            <TableCell className={"flex gap-2 items-center"}>
                                                <img src={image} alt={name}
                                                     className={"hidden md:block w-14 h-14 object-cover"}/>
                                                {name}
                                            </TableCell>
                                            <TableCell>{category}</TableCell>
                                            <TableCell>{price}</TableCell>
                                            <TableCell>{quantity}</TableCell>
                                            <TableCell>{totalSales}</TableCell>
                                            <TableCell>
                                                {
                                                    availability === "In Stock" ?
                                                        <p className={"text-green-5 bg-green-2 px-2 py-1 w-fit"}>{availability}</p>
                                                        :
                                                        <p className={"text-orange-5 bg-orange-2 px-2 py-1 w-fit"}>{availability}</p>
                                                }
                                            </TableCell>
                                            <TableCell>
                                                <div className={"flex gap-4 items-center text-2xl"}>
                                                    <Link to={`/admin/product/${id}`} className={"text-blue-5"}><LuEye /></Link>
                                                    <Link to={`/admin/edit-product/${id}`}  className={"text-green-5"}><CiEdit/></Link>
                                                    <DeleteProduct productId={id}>
                                                        <button className={"text-orange-5"}><RiDeleteBinLine/></button>
                                                    </DeleteProduct>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Products