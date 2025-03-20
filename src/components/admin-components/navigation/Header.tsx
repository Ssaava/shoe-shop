import {CiSearch} from "react-icons/ci";
import {LuArrowRightFromLine} from "react-icons/lu";
import UserMenu from "@/components/admin-components/UserMenu.tsx";
import Notifications from "@/components/admin-components/Notifications.tsx";
import {notifications} from "@/assets/data.ts";
type Props = {
    handleToggleSidebar: ()=> void;
    toggleSidebar: boolean;
}
const Header = ({handleToggleSidebar, toggleSidebar}: Props)=>{
    const user = {
        image: '/users/user-image-0.png',
        name: 'EMMANUEL',
        role: 'admin'
    }

    return (
        <>
            <div className={"bg-white px-8 md:px-12 py-4 h-[6.3rem] flex items-center gap-4"}>
                {
                    toggleSidebar ? "":<button onClick={handleToggleSidebar}>
                        <LuArrowRightFromLine className={"text-3xl text-primary"} />
                    </button>
                }
                <div className={"flex-1"}>
                    <form
                        onSubmit={e => e.preventDefault()}
                        className={"rounded-xl border-[1px] px-6 flex gap-4 items-center justify-between max-w-[900px] w-full"}>
                        <input type={"search"} className={"w-full py-3 ring-0 bg-none border-none outline-none"}/>
                        <button type={"submit"} className={"border-none shadow-none"}>
                            <CiSearch className={"text-2xl"}/>
                        </button>
                    </form>
                </div>
                <div className={"hidden md:flex items-center gap-4 md:gap-6"}>
                    <Notifications  notifications={notifications}/>
                    <UserMenu user={user}/>
                </div>
            </div>
        </>
    )
}
// @ts-ignore
export default Header