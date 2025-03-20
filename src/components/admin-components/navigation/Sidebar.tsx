import {Link, useLocation} from "react-router-dom";
import logo from "/full-logo.png"
import {useState} from "react";
import { LuArrowLeftFromLine } from "react-icons/lu";

type Props = {
    handleToggleSidebar: ()=> void;
    toggleSidebar: boolean;
}
const Sidebar = ({toggleSidebar, handleToggleSidebar}: Props)=>{
    const [activeBar, setActiveBar] = useState<string | null>("");
    const location = useLocation();
    const path = location.pathname;

    const handleActiveBar = (value: string)=>{
        setActiveBar(value)
    }
    return (
        <>
            <div className={`${toggleSidebar ? "" :"-translate-x-full"} z-50 duration-300 bg-background-200 shadow-lg fixed max-h-screen h-full left-0 top-0 flex flex-col`}>
                <div className={"border-b-2 border-b-hr px-8 py-4 relative"}>
                    <Link to={"/admin"} style={{filter: 'hue-rotate(270deg)'}}>
                        <img src={logo} alt={"Logo Image"}/>
                    </Link>
                    <button onClick={handleToggleSidebar} className={"absolute right-4 top-1/2 -translate-y-1/2"}>
                        <LuArrowLeftFromLine className={"text-3xl text-primary"} />
                    </button>
                </div>
                <div className={"px-8 py-4"}>
                    <div className={"mt-8 md:mt-12 flex flex-col gap-8 font-bold"}>
                        <div className={"flex flex-col gap-4"}>
                            <h3 className={"capitalize text-gray-3"}>Menu</h3>
                            <div className={"flex flex-col gap-2 ml-4"}>
                                <Link
                                    onClick={()=>handleActiveBar("")}
                                    to={"/admin"}
                                    className={`${activeBar === "" && path === "/admin" ? "bg-primary-50 text-primary ": "text-white"} hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Dashboard</Link>
                                <Link
                                    onClick={()=>handleActiveBar("sales")}
                                    to={"/admin/sales"}
                                      className={`${activeBar === "sales" || path.includes("sales") ? "bg-primary-50 text-primary ": "text-white"} hover:bg-primary-50 hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Sales</Link>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <h3 className={"capitalize text-gray-3"}>Management</h3>
                            <div className={"flex flex-col gap-2 ml-4"}>
                                <Link
                                    onClick={()=>handleActiveBar("products")}
                                    to={"/admin/products"}
                                      className={`${activeBar === "products" || path.includes("products") ? "bg-primary-50 text-primary ": "text-white"} hover:bg-primary-50 hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Products</Link>
                                <Link
                                    onClick={()=>handleActiveBar("customers")}
                                    to={"/admin/customers"}
                                      className={`${activeBar === "customers" || path.includes("customers") ? "bg-primary-50 text-primary ": "text-white"} hover:bg-primary-50 hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Customers</Link>
                                <Link
                                    onClick={()=>handleActiveBar("orders")}
                                    to={"/admin/orders"}
                                      className={`${activeBar === "orders" || path.includes("orders") ? "bg-primary-50 text-primary ": "text-white"} hover:bg-primary-50 hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Orders</Link>
                               <Link
                                    onClick={()=>handleActiveBar("categories")}
                                    to={"/admin/categories"}
                                      className={`${activeBar === "categories" || path.includes("categories") ? "bg-primary-50 text-primary ": "text-white"} hover:bg-primary-50 hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Categories</Link>
                               <Link
                                    onClick={()=>handleActiveBar("brands")}
                                    to={"/admin/brands"}
                                      className={`${activeBar === "brands" || path.includes("brands") ? "bg-primary-50 text-primary ": "text-white"} hover:bg-primary-50 hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Brands</Link>
                                <Link
                                    onClick={()=>handleActiveBar("notifications")}
                                    to={"/admin/notifications"}
                                      className={`${activeBar === "notifications" || path.includes("notifications") ? "bg-primary-50 text-primary ": "text-white"} hover:bg-primary-50 hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Notifications</Link>
                                <Link
                                    onClick={()=>handleActiveBar("profile")}
                                      to={"/admin/profile"}
                                      className={`${activeBar === "profile" || path.includes("profile") ? "bg-primary-50 text-primary ": "text-white"} hover:bg-primary-50 hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300`}>Profile</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={"flex flex-col gap-2 ml-4 w-full mt-auto font-bold px-8 py-4"}>
                    <form onSubmit={e => e.preventDefault()}>
                        <button type={"submit"}
                                className={"block text-start hover:bg-primary-50 text-white hover:text-primary px-5 py-2 rounded-lg min-w-52 duration-300"}>
                            Log Out
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Sidebar