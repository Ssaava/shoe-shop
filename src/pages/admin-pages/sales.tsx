import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {CiSearch} from "react-icons/ci";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {orders} from "@/assets/data.ts";
import { Link } from "react-router-dom";
import {LuEye} from "react-icons/lu";

const Sales = ()=>{
    return (
        <>
            <>
                <div className={"vertical-spacing"}>
                    <div className={"flex items-center justify-between gap-4"}>
                        <h2 className={"text-2xl font-bold"}>Sales List</h2>
                        <div>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Sales</BreadcrumbPage>
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
                                           placeholder={'search sales'}
                                           className={"w-full py-2 ring-0 bg-none border-none outline-none"}/>
                                    <button type={"submit"} className={"border-none shadow-none"}>
                                        <CiSearch className={"text-2xl"}/>
                                    </button>
                                </form>
                                <div className={"flex gap-4 items-center"}>
                                    <Select onValueChange={value => console.log(value)}>
                                        <SelectTrigger

                                            className="flex items-center justify-center py-5">
                                            <SelectValue placeholder="Filter"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="biggest">Biggest Sale</SelectItem>
                                            <SelectItem value="smallest">Smallest Sale</SelectItem>
                                            <SelectItem value="recent">Recent</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Table className={"min-w-[46rem]"}>
                                <TableHeader>
                                    <TableRow className={"font-bold"}>
                                        <TableHead>Sale ID</TableHead>
                                        <TableHead>Product Name</TableHead>
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
                                        orders.filter(order => order?.status == 'COMPLETED').slice(0, 10).map(({id,productName, status, price, deliveryDate, deliveryStatus}) => (
                                            <TableRow key={id} className={"text-gray-8"}>
                                                <TableCell className={"flex gap-2 items-center"}>
                                                    #{id}
                                                </TableCell>
                                                <TableCell>{productName}</TableCell>
                                                <TableCell>{price}</TableCell>
                                                <TableCell>
                                                    {
                                                        <p className={"text-primary bg-primary-50 px-2 py-1 w-fit"}>{deliveryStatus}</p>
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        <p className={"text-primary bg-primary-50 px-2 py-1 w-fit"}>{status}</p>
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        <p className={"text-primary bg-primary-50 px-2 py-1 w-fit"}>{deliveryStatus}</p>
                                                    }
                                                </TableCell>
                                                <TableCell>{deliveryDate}</TableCell>
                                                <TableCell>
                                                        <Link to={`/admin/orders/${id}`} className={"text-blue-5 text-2xl"}><LuEye/></Link>
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

export default Sales