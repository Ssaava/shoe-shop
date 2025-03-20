import {Link, useParams} from "react-router-dom"
import {orders, products} from "@/assets/data.ts";
import {ArrowLeft} from "lucide-react";
import Progress from "@/components/user-components/Progress.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

import { Product} from "@/assets/types.ts";
import {extractNum} from "@/assets/utils.tsx";
import {useEffect, useState} from "react";
// import Progress from "@/pages/user-pages/progress.tsx";

const UserOrderDetails = ()=>{
    const [steps, setSteps] = useState<number>(1)
    const {orderId} = useParams()
    const order= orders.find(order => order.id === orderId)
    useEffect(() => {
        if(order?.status === "IN PROGRESS"){
            setSteps(3)
        }else if(order?.status === "COMPLETED"){
            setSteps(4)
        }else if(order?.status === "CANCELED"){
            setSteps(0)
        }else {
            setSteps(2)
        }
    }, [order?.status]);
    return (
        <>
            <div className={"md:min-h-[calc(100vh-6.25rem)] w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                <div className={"bg-white w-full p-6 md:p-12 mx-auto mt-16 vertical-spacing"}>
                    <div className={"border"}>
                        <div className={"flex items-center gap-4 p-4 border-b"}>
                            <Link to={"/orders"}><ArrowLeft/></Link>
                            <h3>Order Details</h3>
                        </div>
                        <div className={"p-4"}>
                            <div
                                className={"bg-green-2 border border-green-5 py-6 px-4 flex items-center gap-4 flex-wrap justify-between"}>
                                <div className={"vertical-spacing"}>
                                    <h3 className={"text-gray-8 md:text-2xl text-lg font-medium"}>#{order?.id}</h3>
                                    <p>
                                        4 Products {" . "}
                                        <span>Order Placed on: {order?.deliveryDate} at 12:00pm</span>

                                    </p>
                                </div>
                                <h3 className={"text-blue-5 md:text-3xl text-2xl font-bold"}>{order?.price}</h3>

                            </div>

                            <Progress steps={steps}/>

                        </div>
                        <div className={'border-y py-4 mt-10'}>
                            <h3 className={"text-lg my-4 font-extrabold text-gray-8 px-4"}>Products ({"3"})</h3>
                            <Table>
                                <TableHeader className={"bg-gray-100 border-t"}>
                                    <TableRow className={'px-4'}>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Sub Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        products.slice(0, 3).map(({id, name, price, image}: Product) => (
                                            <TableRow key={id} className={'px-4'}>
                                                <TableCell className="font-medium ">
                                                    <div className={"flex items-center gap-4"}>
                                                        <img src={image} alt={"Product Name"}
                                                             className={"block object-cover max-h-24 max-w-24"}/>
                                                        <p>{name}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{price}</TableCell>
                                                <TableCell>{3}</TableCell>
                                                <TableCell>{extractNum(price) * 3}ugx</TableCell>
                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>
                        </div>
                        {/* Other information */}
                        <div className={'p-4'}>
                            <div className={"grid md:grid-cols-3 gap-6"}>
                                <div className={"md:pr-4 md:border-r vertical-spacing"}>
                                    <h2 className={"font-medium text-lg"}>Billing Address</h2>
                                    <p className={"font-medium text-sm"}>{order?.customer}</p>
                                    <div className={"text-gray-500 text-sm"}>
                                        <p>Kampala, Uganda</p>
                                        <p>Kikoni</p>
                                        <p>5th street</p>
                                    </div>
                                    <p className={"font-medium text-sm"}>Phone Number: <span
                                        className={"font-normal text-gray-500"}>+256 777777777</span></p>
                                    <p className={"font-medium text-sm"}>Email: <span
                                        className={"font-normal text-gray-500"}>{order?.customer}@gmail.com</span></p>
                                </div>
                                {/*    Shipping Address */}
                                <div className={"md:px-4 md:border-r vertical-spacing"}>
                                    <h2 className={"font-medium text-lg"}>Billing Address</h2>
                                    <p className={"font-medium text-sm"}>{order?.customer}</p>
                                    <div className={"text-gray-500 text-sm"}>
                                        <p>Kampala, Uganda</p>
                                        <p>Kikoni</p>
                                        <p>5th street</p>
                                    </div>
                                    <p className={"font-medium text-sm"}>Phone Number: <span
                                        className={"font-normal text-gray-500"}>+256 777777777</span></p>
                                    <p className={"font-medium text-sm"}>Email: <span
                                        className={"font-normal text-gray-500"}>{order?.customer}@gmail.com</span></p>
                                </div>
                                {/*    */}
                                <div className={"md:px-4 vertical-spacing"}>
                                    <h2 className={"font-medium text-lg"}>Order Notes</h2>
                                    <p className={"text-gray-500 text-sm"}>If each order can have multiple products, you can modify the orders array to include an array of productIds or an array of products directly. This structure allows each order to be associated with multiple products, and you can map or find the product details for each productId.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserOrderDetails