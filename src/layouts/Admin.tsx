// @ts-nocheck

import {Outlet} from "react-router-dom";
import Sidebar from "@/components/admin-components/navigation/Sidebar.tsx";
import Header from "@/components/admin-components/navigation/Header.tsx";
import {useState} from "react";

const Admin = ()=>{
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const handleToggleSidebar = ()=>{
        setToggleSidebar(prev => !prev)
    }
    return (
        <>
            <div className={"relative bg-blue-1"}>
                <Sidebar handleToggleSidebar={handleToggleSidebar} toggleSidebar={toggleSidebar} />
                <div className={`${toggleSidebar ? "lg:ml-[18rem]": ""} duration-300 min-h-screen`}>
                    <Header handleToggleSidebar={handleToggleSidebar} toggleSidebar={toggleSidebar}/>
                    <div className={"p-8 md:p-12"}>
                        <Outlet context={{toggleSidebar}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin