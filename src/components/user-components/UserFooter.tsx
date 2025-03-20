import {FaFacebook, FaInstagram, FaPhoneAlt} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import logo from "/full-logo.png"
import {Link} from "react-router-dom";
import {HiHome} from "react-icons/hi2";
import {TbMailFilled} from "react-icons/tb";
const UserFooter = ()=>{
    const copyRight = new Date().getFullYear();
    return (
        <footer
            className="mt-auto bg-neutral-100 text-center text-neutral-600 lg:text-left">
                <div
                    className=" md:px-20 lg:px-60 flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Social network icons container --> */}
                    <div className="flex justify-center">
                        <a className="mr-6 text-neutral-600">
                            <FaFacebook className={"text-lg hover:text-blue-5 hover:scale-125 duration-300"}/>
                        </a>
                        <a className="mr-6 text-neutral-600">
                           <FaXTwitter className={"text-lg hover:text-blue-5 hover:scale-125 duration-300"}/>
                        </a>

                        <a className="mr-6 text-neutral-600">
                           <FaInstagram className={"text-lg hover:text-blue-5 hover:scale-125 duration-300"}/>
                        </a>
                    </div>
                </div>

                {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
                <div className=" md:px-20 lg:px-60 mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* <!-- TW Elements section --> */}
                        <div className="">
                            <div
                                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <img src={logo} alt={"Company Logo"}/>
                            </div>
                            <p>
                                Here you can add some information about the company and any other business
                            </p>
                        </div>
                        {/* <!-- Products section --> */}
                        <div className="">
                            <h6
                                className="mb-4 text-black flex justify-center text-black font-bold uppercase md:justify-start">
                                Products
                            </h6>
                            <p className="mb-1 hover:text-primary">
                                <Link to={'/products'}>Men Shoes</Link>
                            </p>
                            <p className="mb-1 hover:text-primary">
                                <Link to={'/products'}>Lady's Shoes</Link>
                            </p>
                            <p className="mb-1 hover:text-primary">
                                <Link to={'/products'}>Children Shoes</Link>
                            </p>
                        </div>
                        {/* <!-- Useful links section --> */}
                        <div>
                            <h6
                                className="mb-4 text-black flex justify-center font-semibold uppercase md:justify-start">
                                Useful links
                            </h6>
                            <p className="mb-1">
                                <Link to={"/about"} className="text-neutral-600 hover:text-primary duration-300"
                                >About us</Link>
                            </p>
                            <p className="mb-1">
                                <Link to={"/contact"} className="text-neutral-600 hover:text-primary duration-300"
                                >Contact Us</Link>
                            </p>
                            <p className="mb-1">
                                <Link to={'/orders'} className="text-neutral-600 hover:text-primary duration-300"
                                >Orders</Link>
                            </p>
                            <p>
                                <Link to={'contact'} className="text-neutral-600 hover:text-primary duration-300" >Help</Link>
                            </p>
                        </div>
                        {/* <!-- Contact section --> */}
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Contact
                            </h6>
                            <p className="mb-1 flex items-center justify-center gap-4 md:justify-start">
                               <HiHome className={"text-lg"}/>
                                Kampala, Uganda
                            </p>
                            <p className="mb-1 flex items-center justify-center gap-4 md:justify-start">
                               <TbMailFilled className={"text-lg"}/>
                                shoe-shop@gmail.com
                            </p>
                            <p className="mb-1 flex items-center justify-center gap-4 md:justify-start">
                               <FaPhoneAlt className={"text-lg"}/>
                                + 256 777777777
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!--Copyright section--> */}
                <div className=" md:px-20 lg:px-60 bg-neutral-200 p-6 text-center">
                    <span>© {copyRight} Copyright: {' '}</span>
                    <a
                        className="font-semibold text-neutral-600"

                    >Shoe Shop</a>
                </div>
            </footer>
    )
}

export default UserFooter

//
// import {FaPhoneAlt} from "react-icons/fa";
// import {Link} from "react-router-dom";
// import {HiHome} from "react-icons/hi2";
// import {TbMailFilled} from "react-icons/tb";
// const categories:{
//     name: string,
//     link: string
// }[] = [
//     {
//         name: "Running Shoes",
//         link: "/products"
//     },
//     {
//         name: "Casual Shoes",
//         link: "/products"
//     },
//     {
//         name: "Yoga Shoes",
//         link: "/products"
//     },
//     {
//         name: "Sports Shoes",
//         link: "/products"
//     }
// ]
// const business:{
//     name: string,
//     link: string
// }[] = [
//     {
//         name: "Shop",
//         link: "/shop"
//     },
//     {
//         name: "Company Profile",
//         link: "/about"
//     },
//     {
//         name: "Social Responsibility",
//         link: "/contact"
//     }
// ]
// const usefullLinks:{
//     name: string,
//     link: string
// }[] = [
//     {
//         name: "Shop",
//         link: "/shop"
//     },
//     {
//         name: "Company Profile",
//         link: "/about"
//     },
//     {
//         name: "Social Responsibility",
//         link: "/contact"
//     }
// ]
// const UserFooter = ()=>{
//     const copyRight = new Date().getFullYear();
//     return (
//         <footer
//             className="mt-auto bg-neutral-100 text-center text-neutral-600 lg:text-left">
//             {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
//             <div className=" inline-padding py-10 text-center md:text-left">
//                 <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//                     {/* <!-- Products section --> */}
//                     <div className="vertical-spacing !gap-1">
//                         <h6
//                             className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
//                             Categories
//                         </h6>
//                         {
//                             categories.map(({name, link}, index) => (
//                                 <Link key={index} to={link} className={`text-neutral-600"`}>{name}</Link>
//                             ))
//                         }
//                     </div>
//
//                     {/**/}
//                     <div className="vertical-spacing !gap-1">
//                         <h6
//                             className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
//                             Business
//                         </h6>
//                         {
//                             business.map(({name, link}, index) => (
//                                 <Link key={index} to={link} className={`text-neutral-600"`}>{name}</Link>
//                             ))
//                         }
//                     </div>
//                     {/* <!-- Useful links section --> */}
//                     <div className="vertical-spacing !gap-1">
//                         <h6
//                             className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
//                             Usefull links
//                         </h6>
//                         {
//                             usefullLinks.map(({name, link}, index) => (
//                                 <Link key={index} to={link} className={`text-neutral-600"`}>{name}</Link>
//                             ))
//                         }
//                     </div>
//                     {/* <!-- Contact section --> */}
//                     <div>
//                         <h6
//                             className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
//                             Contact
//                         </h6>
//                         <p className="mb-4 flex items-center justify-center gap-4 md:justify-start">
//                             <HiHome className={"text-lg"}/>
//                             Kampala, Uganda
//                         </p>
//                         <p className="mb-4 flex items-center justify-center gap-4 md:justify-start">
//                             <TbMailFilled className={"text-lg"}/>
//                             shoe-shop@gmail.com
//                         </p>
//                         <p className="mb-4 flex items-center justify-center gap-4 md:justify-start">
//                             <FaPhoneAlt className={"text-lg"}/>
//                             + 256 777777777
//                         </p>
//                     </div>
//                 </div>
//             </div>
//
//             {/* <!--Copyright section--> */}
//             <div
//                 className="inline-padding bg-neutral-100 border-t-2 border-t-white py-16 flex justify-between items-center gap-4">
//                 <p>Copyright © {copyRight} : OVO | <Link to={"/"} className={"text-blue-500"}
//                                                          reloadDocument>Credits</Link></p>
//                 <p>Powered by <Link to={"/"} className={"text-blue-500"} reloadDocument>OVO shoe shop</Link></p>
//
//             </div>
//         </footer>
//     )
// }
//
// export default UserFooter