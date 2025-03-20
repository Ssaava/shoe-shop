import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Link, useParams} from "react-router-dom";
import {customers, orders, wishlist} from "@/assets/data.ts";
import backgroundImage from "/background-images/user-details-bg.png"
import userImage from "/users/user-image-0.png"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import DeleteOrder from "@/components/admin-components/products-components/DeleteOrder.tsx";
import {RiDeleteBinLine} from "react-icons/ri";
import {LuEye} from "react-icons/lu";

const CustomerDetails = ()=>{
    const {customerId} = useParams()
    const customer = customers.find(customer => customer.id === customerId)
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl md:text-3xl font-bold"}>{customer?.firstName + " " + customer?.lastName}</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/customers">Customers</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Customer details</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
            </div>

        {/*    Details */}
            <div className={"flex gap-4 mt-8 flex-wrap"}>
                <div className={"max-w-[35rem] mx-auto w-full bg-white rounded-lg vertical-spacing"}>
                    <div className={"vertical-spacing p-6 "}>
                        <div className={"relative rounded-lg w-full"}>
                            <img src={backgroundImage} alt={"Background image"} className={"rounded-lg block"}/>
                            <div
                                className={"absolute -bottom-10 md:-bottom-20 w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full border-[.5rem] border-green-5 left-1/2 -translate-x-1/2"}>
                                <img src={userImage} alt={"User Image"} className={"block rounded-full w-full h-full"}/>
                            </div>
                        </div>
                        <div className={"vertical-spacing gap-1 w-fit mx-auto mt-8 md:mt-20"}>
                            <h2 className={"text-lg font-medium"}>Kato Smith</h2>
                            <p className={"text-sm text-light text-gray-8"}>User Details</p>
                        </div>
                    </div>

                    <div className={"pb-2 bg-[rgba(0,0,0,.05)] rounded-b-lg"}>
                        <div className={"px-4 border-t py-2 pt-2"}>
                            <p className={"font-bold"}>Address: </p>
                            <p className={"text-gray-600 font-light"}>Salaama</p>
                        </div>
                        <div className={"px-4 border-t py-2"}>
                            <p className={"font-bold"}>Email: </p>
                            <a href={'mailto:emma@gmail.com'} className={"text-gray-600 font-light"}>emma@gmail.com</a>
                        </div>
                        <div className={"px-4 border-t py-2 pb-2"}>
                            <p className={"font-bold"}>Contact: </p>
                            <p className={"text-gray-600 font-light"}>+256 777777777</p>
                        </div>
                    </div>
                </div>
                <div className={"flex-1 bg-white p-6  overflow-scroll min-w-[18rem] vertical-spacing"}>
                    <h3 className={'font-extrabold text-xl md:text-3xl'}>Orders</h3>
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
                                                <Link to={`/admin/orders/${id}`} className={"text-blue-5 text-2xl"}><LuEye/></Link>
                                                {/*<Link to={`/admin/edit-product/${id}`}*/}
                                                {/*      className={"text-green-5"}><CiEdit/></Link>*/}
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

                 <div className={"bg-white p-6 w-full overflow-scroll min-w-[18rem] vertical-spacing"}>
                    <h3 className={'font-extrabold text-xl md:text-3xl'}>WhishList</h3>
                     <Table className={"min-w-[46rem]"}>
                         <TableHeader>
                             <TableRow className={"font-bold"}>
                                 <TableHead>Product ID</TableHead>
                                 <TableHead>Product</TableHead>
                                 <TableHead>Color</TableHead>
                                 <TableHead>Size</TableHead>
                                 <TableHead>Quantity</TableHead>
                                 <TableHead>Price</TableHead>
                                 <TableHead>Total</TableHead>
                             </TableRow>
                         </TableHeader>
                         <TableBody>

                             {
                                 wishlist.map(({id, productId, size, image, name, color,price,quantity, total })=>(
                                     <TableRow key={id} className={"text-gray-8"}>
                                         <TableCell>{productId}</TableCell>
                                         <TableCell>
                                             <div className={"flex gap-2 items-center"}>
                                                 <div className={"h-16 w-16"}>
                                                     <img src={image} alt={name}
                                                          className={"hidden md:block w-full h-full object-cover"}/>
                                                 </div>
                                                 <p>{name}</p>
                                             </div>
                                         </TableCell>
                                         <TableCell>{color}</TableCell>
                                         <TableCell>{size}</TableCell>
                                         <TableCell>{quantity}</TableCell>
                                         <TableCell>{price}</TableCell>
                                         <TableCell>{total}</TableCell>
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


export default CustomerDetails