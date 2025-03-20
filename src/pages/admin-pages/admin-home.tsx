import Card from "@/components/admin-components/dashboard/Card.tsx";
import {AiOutlineTag} from "react-icons/ai";
import {FiDollarSign} from "react-icons/fi";
import {FaCartShopping} from "react-icons/fa6";
import {PiUsers} from "react-icons/pi";
import {Link, useNavigate, useOutletContext} from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {orders, products} from "@/assets/data.ts";

const AdminHome = ()=>{
    const {toggleSidebar}: {toggleSidebar: boolean} = useOutletContext()
    const navigate = useNavigate()
    console.log(toggleSidebar)
    return (
        <>
            <div className={"vertical-spacing"}>
                {/* cards */}
                <div className={`grid ${toggleSidebar? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": ""} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
                    <Card icon={<AiOutlineTag/>} title={"Total Sales"} total={`399`} stats={"up"}/>
                    <Card  icon={<FiDollarSign/>} title={"Total Income"} total={`${127} $`} stats={"up"}/>
                    <Card  icon={<FaCartShopping/>} title={"Total Orders"} total={`260`} stats={"down"}/>
                    <Card  icon={<PiUsers/>} title={"Total Users"} total={`399`} stats={"down"}/>
                </div>
                <div className={`grid ${toggleSidebar ? "lg:grid-cols-1 xl:grid-cols-2" : ""} lg:grid-cols-2 gap-4`}>
                    {/*Top Selling Products*/}
                    <div className={"bg-white p-6 rounded-lg vertical-spacing overflow-hidden"}>
                        <div className={"sm:flex sm:items-center sm:justify-between"}>
                            <h3 className={"text-2xl font-bold"}>Top Selling Product</h3>
                            <Link to={"/admin/products"} className={"text-blue-5 font-light"}>see all</Link>
                        </div>
                        <div>
                            <Table className={"min-w-[32rem]"}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Total Sales</TableHead>
                                        <TableHead>Availability</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                        {
                                            products.slice(0,5).map(({id,image, name, category, totalSales, availability })=>(

                                                    <TableRow onClick={()=> navigate(`/admin/product/${id}`)} key={id} className={"text-gray-8 cursor-pointer"}>
                                                        <TableCell className={"flex gap-2 items-center"}>
                                                            <img src={image} alt={name} className={"block w-10 h-10 object-cover"}/>
                                                            {name}
                                                        </TableCell>
                                                        <TableCell>{category}</TableCell>
                                                        <TableCell>{totalSales}</TableCell>
                                                        <TableCell>
                                                            {
                                                                availability === "In Stock" ?
                                                                    <p className={"text-green-5 bg-green-2 px-2 py-1 w-fit"}>{availability}</p>
                                                                    :
                                                                    <p className={"text-orange-5 bg-orange-2 px-2 py-1 w-fit"}>{availability}</p>
                                                            }
                                                        </TableCell>
                                                    </TableRow>

                                            ))
                                        }

                                </TableBody>
                            </Table>

                        </div>
                    </div>
                    {/*Orders*/}
                    <div className={"bg-white p-6 rounded-lg vertical-spacing overflow-hidden"}>
                        <div className={"sm:flex sm:items-center sm:justify-between"}>
                            <h3 className={"text-2xl font-bold"}>Recent Orders</h3>
                            <Link to={"/admin/orders"} className={"text-blue-5 font-light"}>see all</Link>
                        </div>
                        <div>
                            <Table className={"min-w-[32rem]"}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>DeliveryDate</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                        {
                                            orders.slice(0,5).map(({id,productName, customer, price, deliveryDate, image })=>(
                                                <TableRow onClick={()=> navigate(`/admin/orders/${id}`)} key={id} className={"text-gray-8 cursor-pointer"}>
                                                    <TableCell className={"flex gap-2 items-center"}>
                                                        <img src={image} alt={productName} className={"block w-10 h-10 object-cover"}/>
                                                        {productName}
                                                    </TableCell>
                                                    <TableCell>{customer}</TableCell>
                                                    <TableCell>{price}</TableCell>
                                                    <TableCell>{deliveryDate}</TableCell>
                                                </TableRow>

                                            ))
                                        }
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHome