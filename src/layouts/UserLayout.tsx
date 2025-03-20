import {Outlet} from "react-router-dom";
import UserHeader from "@/components/user-components/UserHeader.tsx";
import UserFooter from "@/components/user-components/UserFooter.tsx";

const UserLayout = ()=>{
    return (
        <>
            <div className={"flex flex-col min-h-screen"}>
                <UserHeader/>
                <Outlet />
               <UserFooter/>
            </div>
        </>
    )
}

export default UserLayout
