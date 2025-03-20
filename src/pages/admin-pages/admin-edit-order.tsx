import {Link, useParams} from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {deliveryStatus, orders, orderStatus, paymentStatus, products} from "@/assets/data.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {extractNum} from "@/assets/utils.tsx";
import SummaryItems from "@/components/admin-components/orders-components/SummaryItems.tsx";
import {Order} from "@/assets/types.ts";
import {Label} from "@/components/ui/label.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

const AdminEditOrder = ()=>{
    const {orderId} = useParams()
    // @ts-ignore
    const order: Order = orders.find(order=> order?.id === orderId)
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>Edit Order #{orderId} Details</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/orders">Orders</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Order #{orderId}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className={"w-full bg-background p-4 rounded-lg vertical-spacing"}>
                    <p className={"font-extrabold text-text-50"}>Order: {' '} <span className={"font-light text-text"}>#{orderId}</span></p>
                    <p className={"font-extrabold text-text-50"}>Customer: {' '} <Link to={"#"} className={"font-light text-text"}>#{order?.customer}</Link></p>
                </div>

                <div className={"grid lg:grid-cols-12 gap-4"}>
                    <div className={'rounded-lg bg-white p-4 lg:col-span-8 vertical-spacing h-fit'}>
                        <h3 className={"font-bold text-lg"}>Products: {" "} <span className={"font-light text-sm"}>({orders.length})</span></h3>
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
                                                <TableCell>
                                                    <Link to={`/admin/product/${id}`} className={"flex gap-2 items-center"}>
                                                        <img src={image} alt={name}
                                                             className={"hidden md:block w-14 h-14 object-cover"}/>
                                                        {name}
                                                    </Link>
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
                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>
                            <div className={'mt-8'}>
                                <SummaryItems title={"Items Sub Total"} value={"1,000,000 ugx"}/>
                            </div>
                        </div>
                    </div>
                    <div className={'lg:col-span-4 vertical-spacing'}>
                        <div className={"vertical-spacing p-4 rounded-lg bg-white"}>
                            <h3 className={"font-bold text-lg"}>Summary</h3>
                            <SummaryItems title={'Items Sub Total'}
                                          value={`${order?.quantity * extractNum(order?.price)} ugx`}/>
                            <SummaryItems title={'Discount'}
                                          value={<p className={"text-secondary line-through"}>1200 ugx</p>}/>
                            <SummaryItems title={'Sub Total'}
                                          value={`${order?.quantity * extractNum(order?.price) - 1200} ugx`}/>
                            <SummaryItems title={'Shipping Cost'} value={"4000 ugx"}/>
                            <div className={"mt-4 py-4 border-t"}>
                                <div className={"grid grid-cols-2 justify-between gap-4 font-bold text-xl"}>
                                    <p>Total</p>
                                    <p className={"text-end"}>{order?.quantity * extractNum(order?.price) - 1200 - 4000} ugx</p>
                                </div>
                            </div>
                        </div>

                        {/*Order Status*/}
                        <div className={"rounded-lg bg-white p-4 lg:col-span-4 vertical-spacing h-fit"}>
                            <h3 className={"font-bold text-lg"}>Order Status</h3>
                            <Label className={"vertical-spacing"}>
                                Payment Status
                                <Select defaultValue={order?.paymentStatus}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={"Payment Status"}></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            paymentStatus.map(status=>(
                                                <SelectItem value={status}>{status}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </Label>
                            <Label className={"vertical-spacing"}>
                                Order Status
                                <Select defaultValue={order?.status}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={"Order Status"}></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            orderStatus.map(status=>(
                                                <SelectItem value={status}>{status}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </Label>
                            <Label className={"vertical-spacing"}>
                                Delivery Status
                                <Select defaultValue={order?.deliveryStatus}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={"Order Status"}></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            deliveryStatus.map(status=>(
                                                <SelectItem value={status}>{status}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </Label>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminEditOrder