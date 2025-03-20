import logo from "/full-logo.png"
import {Link} from "react-router-dom";
import {useActiveNav} from "@/assets/utils.tsx";
import Cart from "@/components/user-components/Cart.tsx";
import {IoMdMenu} from "react-icons/io";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {FaChevronRight} from "react-icons/fa";
import HeaderLink from "@/components/HeaderLink.tsx";


const UserHeader = ()=>{
    const {smallScreenNav, handleSmallScreenNav, activeBar, handleActiveBar, path} = useActiveNav();

    console.log(path)
    return (
        <>
            <nav className={"flex items-center gap-4 section bg-white z-50"}>
                <div style={{filter: 'hue-rotate(270deg)'}}>
                    <Link to={"/"} className={"max-w-fit bg-red-500"}>
                        <img src={logo} alt={"Company Logo"}/>
                    </Link>
                </div>
                <button className={"md:hidden flex-1 flex justify-end items-center"} onClick={handleSmallScreenNav}>
                    <IoMdMenu className={"text-3xl"}/>
                </button>
                <div className={"hidden md:flex flex-1 items-center justify-end gap-4"}>
                  <HeaderLink activeBar={activeBar} handleActiveBar={handleActiveBar} title={"Home"} link={"/"}/>
                  <HeaderLink activeBar={activeBar} handleActiveBar={handleActiveBar} title={"Shop"} link={"shop"}/>
                  <HeaderLink activeBar={activeBar} handleActiveBar={handleActiveBar} title={"About"} link={"about"}/>
                  <HeaderLink activeBar={activeBar} handleActiveBar={handleActiveBar} title={"Contact"} link={"contact"}/>
                <Cart/>
                    {/* Navigation menu item */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={`${activeBar === "my-account" || path === "/my-account" ? "bg-primary-50 text-primary font-medium": "text-900"} hover:text-primary hover:font-medium hover:bg-primary-50 bg-transparent px-4 py-1 rounded-lg duration-300`}>My Account</NavigationMenuTrigger>
                                <NavigationMenuContent className={"w-full bg-white shadow-md"}>
                                    <div className={' w-[14rem] flex flex-col'}>
                                        <NavigationMenuLink onClick={()=>handleActiveBar("my-account")} asChild>
                                            <Link to="/orders" className={`hover:text-primary hover-font-medium px-5 py-3 duration-300 border-b`}>
                                                Orders
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink onClick={()=>handleActiveBar("my-account")} asChild>
                                            <Link to="/my-account" className={`hover:text-primary hover-font-medium px-5 py-3 duration-300`}>
                                                Account Details
                                            </Link>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
            </div>
        </nav>
    <div className={`md:hidden ${smallScreenNav ? "max-h-[24rem]" : "max-h-0 overflow-hidden"} duration-300`}>
        <div className={"py-6 vertical-spacing inline-padding bg-[#F2F4F6] "}>
            <Link onClick={() => handleActiveBar("")}
                  to={"/"}
                  className={`${activeBar === "" && path === "/" ? "text-primary " : "text-blue-5"} hover:text-primary  duration-300`}>
                        Home
                    </Link>
                    <Link onClick={()=>handleActiveBar("shop")}
                          to={"/shop"}
                          className={`${activeBar === "shop" || path === "/shop" ? "text-primary ": "text-blue-5"} hover:text-primary  duration-300`}>
                        Shop
                    </Link>

                    <ul className={"group"}>
                        <li onClick={()=>handleActiveBar("my-account")} className={'flex items-center justify-between gap-4 group'}>
                            <Link
                                to={'/account-details'}
                                className={`${activeBar === "my-account" || path === "/my-account" ? "text-primary " : "text-blue-5"} group-hover:text-primary `}
                            >
                                My Account
                            </Link>
                            <FaChevronRight className={'group-hover:text-primary text-blue-5 group-hover:rotate-90 duration-300'}/>
                        </li>
                        <ul className={"max-h-0 overflow-hidden group-hover:max-h-[14rem] ml-4 duration-300"}>
                            <div className={'py-2 vertical-spacing gap-2'}>
                                <li onClick={() => handleActiveBar("my-account")}>
                                    <Link
                                        to={'/orders'}
                                        className={`hover:text-primary `}
                                    >
                                        Orders
                                    </Link>

                                </li>
                                <li onClick={() => handleActiveBar("my-account")}>
                                    <Link
                                        to={'/account-details'}
                                        className={`hover:text-primary `}
                                    >
                                        Account Details
                                    </Link>

                                </li>
                            </div>
                        </ul>
                    </ul>


            <Link onClick={() => handleActiveBar("about")}
                  to={"/about"}
                  className={`${activeBar === "about" || path === "/about" ? "text-primary " : "text-blue-5"} hover:text-primary  duration-300`}>
                About
            </Link>
            <Link onClick={() => handleActiveBar("contact")}
                  to={"/contact"}
                  className={`${activeBar === "contact" || path === "/contact" ? "text-primary " : "text-blue-5"} hover:text-primary  duration-300`}>
                Contact Us
            </Link>
        </div>
    </div>
        </>
    )
}


export default UserHeader