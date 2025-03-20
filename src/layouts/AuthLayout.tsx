import {Outlet} from "react-router-dom";
const Admin = ()=>{
    const date = new Date().getFullYear();
    return (
        <>
            <div className={`min-h-screen flex flex-col bg-blue-1`}>
                <div className={"p-8 md:p-12"}>
                    <Outlet/>
                </div>
                <div className={"mt-auto w-fit mx-auto py-8 px-8 text-gray-8 text-sm"}>Copyright © {date} ShoeShop, All rights reserved.</div>
            </div>
        </>
    )
}

export default Admin