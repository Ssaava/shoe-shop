import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {orders} from "@/assets/data.ts";
import {Order} from "@/assets/types.ts";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";


const UserOrders = ()=>{
    return (

        <>
            <div
                className={"md:min-h-[calc(100vh-6.25rem)] w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                <div className={"bg-white w-full p-6 md:p-16 mx-auto mt-16 vertical-spacing"}>
                    <h3 className={"text-2xl md:text-3xl font-extrabold text-gray-8"}>Order History</h3>
                    <Table>
                        <TableCaption>
                            <p className={"my-2"}>A list of your recent orders.</p>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order Id</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                orders.map(({id, status, deliveryDate, price}   :Order)=>(
                                    <TableRow key={id}>
                                        <TableCell className="font-medium">{id}</TableCell>
                                        {

                                            status === "CANCELED" ? <TableCell className={"text-red-500 font-bold"}>{status}</TableCell> :
                                                status === "IN PROGRESS" ? <TableCell className={'text-blue-5 font-bold'}>{status}</TableCell> :
                                                    <TableCell className={"text-green-5 font-bold"}>{status}</TableCell>
                                        }
                                        <TableCell>{deliveryDate}</TableCell>
                                        <TableCell>{price}</TableCell>
                                        <TableCell>
                                            <Link to={`/order-details/${id}`} className={"flex items-center gap-4 text-blue-5"}>
                                                <p>View Details</p>
                                                <ArrowRight />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>


                </div>
            </div>
        </>
    )
}
export default UserOrders