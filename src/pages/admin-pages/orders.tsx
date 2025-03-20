import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {CiEdit, CiSearch} from "react-icons/ci";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {orders} from "@/assets/data.ts";
import DeleteOrder from "@/components/admin-components/products-components/DeleteOrder.tsx";
import {RiDeleteBinLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import {LuEye} from "react-icons/lu";

const Orders = ()=>{
    return (
        <>
            <>
                <div className={"vertical-spacing"}>
                    <div className={"flex items-center justify-between gap-4"}>
                        <h2 className={"text-2xl font-bold"}>Orders List</h2>
                        <div>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Orders</BreadcrumbPage>
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
                                           placeholder={"search here..."}
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
                                            className="flex items-center justify-center py-5">
                                            <SelectValue placeholder="Payment Status"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Pending">Pending</SelectItem>
                                            <SelectItem value="Delivered">Delivered</SelectItem>
                                            <SelectItem value="Canceled">Canceled</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </form>
                                <form
                                    onSubmit={e => e.preventDefault()}
                                    className={"flex gap-4 items-center"}>
                                    <Select>
                                        <SelectTrigger
                                            className="flex items-center justify-center py-5">
                                            <SelectValue placeholder="Order Status"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="In Progress">In Progress</SelectItem>
                                            <SelectItem value="Completed">Completed</SelectItem>
                                            <SelectItem value="Canceled">Canceled</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </form>
                            </div>
                        </div>
                        <div>
                            <Table className={"min-w-[46rem]"}>
                                <TableHeader>
                                    <TableRow className={"font-bold"}>
                                        <TableHead>Order ID</TableHead>
                                        <TableHead>Expense</TableHead>
                                        <TableHead>Payment Status</TableHead>
                                        <TableHead>Order Status</TableHead>
                                        <TableHead>Delivery Status</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                    {
                                        orders.slice(0, 10).map(({id, status, price, deliveryDate, deliveryStatus,paymentStatus}) => (
                                            <TableRow key={id} className={"text-gray-8"}>
                                                <TableCell className={"flex gap-2 items-center"}>
                                                    #{id}
                                                </TableCell>
                                                <TableCell>{price}</TableCell>
                                                <TableCell>
                                                    {
                                                        paymentStatus === "Refunded" ?
                                                            <p className={"text-green-5 bg-green-2 px-2 py-1 w-fit"}>{deliveryStatus}</p> :
                                                            paymentStatus === "Unpaid" ?
                                                                <p className={"text-orange-5 bg-orange-2 px-2 py-1 w-fit"}>{deliveryStatus}</p> :
                                                                <p className={"text-blue-5 bg-blue-1 px-2 py-1 w-fit"}>{deliveryStatus}</p>

                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        status === "IN PROGRESS" ?
                                                            <p className={"text-green-5 bg-green-2 px-2 py-1 w-fit"}>{status}</p>:
                                                            status === "CANCELED" ?
                                                                <p className={"text-orange-5 bg-orange-2 px-2 py-1 w-fit"}>{status}</p>:
                                                                <p className={"text-blue-5 bg-blue-1 px-2 py-1 w-fit"}>{status}</p>
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        deliveryStatus === "Pending" ?
                                                            <p className={"text-green-5 bg-green-2 px-2 py-1 w-fit"}>{deliveryStatus}</p> :
                                                            deliveryStatus === "Canceled" ?
                                                                <p className={"text-orange-5 bg-orange-2 px-2 py-1 w-fit"}>{deliveryStatus}</p> :
                                                                <p className={"text-blue-5 bg-blue-1 px-2 py-1 w-fit"}>{deliveryStatus}</p>
                                                    }
                                                </TableCell>
                                                <TableCell>{deliveryDate}</TableCell>
                                                <TableCell>
                                                    <div className={"flex gap-4 items-center text-2xl"}>
                                                        <Link to={`/admin/orders/${id}`} className={"text-blue-5"}><LuEye/></Link>
                                                        <Link to={`/admin/orders/edit-order/${id}`}
                                                              className={"text-green-5"}><CiEdit/></Link>
                                                        <DeleteOrder orderId={id}>
                                                            <button className={"text-orange-5"}><RiDeleteBinLine/></button>
                                                        </DeleteOrder>
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
        </>
    )
}

export default Orders