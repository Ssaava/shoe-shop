import {useEffect, useState} from "react";
import {
    GetCountries
} from "react-country-state-city";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {products} from "@/assets/data.ts";
import {Link} from "react-router-dom";
import {gradientBackground} from "@/assets/utils.tsx";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";

const Checkout = ()=>{
    const [activeTab, setActiveTab] = useState<string>("shipping");
    const [countriesList, setCountriesList] = useState<{
        name: string
    }[]>([])
    useEffect(() => {
        GetCountries().then((result) => {
            setCountriesList(result);
        });
    }, []);
    const handleActiveTab = (value: string)=>{
        setActiveTab(value)
    }
    return (
        <>
            <div
                className={"md:min-h-[calc(100vh-6.25rem)] w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                <div className={"bg-white w-full p-6 md:p-12 mx-auto mt-16 vertical-spacing"}>
                    <h2 className={'text-2xl md:text-3xl font-extrabold'}>Check Out</h2>
                    <form onSubmit={e=> e.preventDefault()} className={"border"}>
                        <div className={"grid sm:grid-cols-2"}>
                            <div onClick={() => handleActiveTab("shipping")}
                                 className={`${activeTab === "shipping" ? "border-t-green-5" : "border-t-transparent bg-gray-100"} border-t-[3px] w-full p-4`}>
                                <div className={"flex gap-1 items-center"}>
                                    <p className={"text-4xl font-extra-bold text-gray-8"}>1</p>
                                    <div>
                                        <h3 className={"text-green-5 font-bold"}>Shipping</h3>
                                        <p className={"text-gray-400 text-sm font-light"}>Where to ship it?</p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => handleActiveTab("payment")}
                                 className={`${activeTab === "payment" ? "border-t-green-5" : "border-t-transparent bg-gray-100"} border-t-[3px] w-full p-4`}>
                                <div className={"flex gap-1 items-center"}>
                                    <p className={"text-4xl font-extra-bold text-gray-8"}>2</p>
                                    <div>
                                        <h3 className={"text-green-5 font-bold"}>Payment</h3>
                                        <p className={"text-gray-400 text-sm font-light"}>of your order</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*    */}
                        {/*Tabs*/}
                        <div className={`${activeTab === "shipping" ? "mt-4" : "hidden"} vertical-spacing gap-6 p-4 lg:px-24 w-full`}>
                           <h3 className={"py-4 border-b md:w-fit text-lg md:text-2xl font-extrabold"}>Customer Information</h3>
                            <input type={'email'} name={'email'} placeholder={'email Address *'} className={'border px-5 py-2 outline-none active:ring-0 w-full'}/>

                            <div className={'vertical-spacing gap-6'}>
                                <h3 className={"py-4 border-b text-lg md:text-2xl font-extrabold"}>Billing Details</h3>
                                <div className={"grid gap-4 md:grid-cols-2"}>
                                    <input type={'text'} name={'firstName'} placeholder={'First Name *'}
                                           className={'border px-5 py-2 outline-none active:ring-0 w-full'}/>
                                    <input type={'text'} name={'lastName'} placeholder={'Last Name *'}
                                           className={'border px-5 py-2 outline-none active:ring-0 w-full'}/>
                                </div>
                                <label className={"vertical-spacing gap-2"}>
                                    {/*Country/Region*/}
                                    <select
                                        className={'px-5 py-2 bg-white border'}>
                                        {countriesList.map((item, index) => (
                                            <option key={index} value={index}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <div className={"grid md:grid-cols-2 gap-4"}>
                                    <input type={'text'} name={'town/village'} placeholder={'Town / Village *'}
                                           className={'border px-5 py-2 outline-none active:ring-0 w-full'}/>
                                    <input type={'text'} name={'district'} placeholder={'District *'}
                                           className={'border px-5 py-2 outline-none active:ring-0 w-full'}/>
                                </div>

                                <input type={'text'} name={'contact'} placeholder={'Phone *'}
                                       className={'border px-5 py-2 outline-none active:ring-0 w-full'}/>
                            </div>
                            {/*additional information*/}
                            <div className={"vertical-spacing gap-6"}>
                                <h3 className={"py-4 border-b text-lg md:text-2xl font-extrabold"}>Additional Information</h3>
                                <textarea
                                    rows={3}
                                    name={'additionalInformation'}
                                    placeholder={'Notes About your order'}
                                       className={'border px-5 py-2 outline-none active:ring-0 w-full'}></textarea>

                            </div>
                        </div>

                        {/*second tab*/}
                        <div
                            className={`${activeTab === "payment" ? "mt-4" : "hidden"} vertical-spacing gap-6 p-4 lg:px-24 w-full`}>
                            <h3 className={"py-4 border-b md:w-fit text-lg md:text-2xl font-extrabold"}>Your Order</h3>
                            <div>
                                <Table className={"border rounded-lg"}>
                                    <TableHeader>
                                        <TableRow className={"bg-[#F2F4F6]"}>
                                            <TableHead className={"p-4"}>Product</TableHead>
                                            <TableHead className={"text-right p-4"}>SubTotal</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            products.slice(0, 3).map(({id, name, image, price}) => (
                                                <TableRow key={id}>
                                                    <TableCell className="font-medium">
                                                        <div className={"flex items-center gap-4"}><Link
                                                            to={`/product/${id}`} className={"flex items-center gap-4"}>
                                                            <div
                                                                className={"min-h-16 min-w-16 h-16 w-16 rounded-lg center-items p-4"}
                                                                style={gradientBackground}>
                                                                <img src={image} alt={name}/>
                                                            </div>
                                                            <h2 className={"text-blue-5 font-light"}>{name}</h2>
                                                        </Link>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className={"text-right p-4"}>{price}</TableCell>

                                                </TableRow>
                                            ))
                                        }
                                        <TableRow>
                                            <TableCell className={"p-4 text-lg font-bold"}>Total</TableCell>
                                            <TableCell
                                                className={"p-4 text-lg font-bold text-right"}>92,000ugx</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                            <SubmitButton title={"PLACE ORDER"} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Checkout