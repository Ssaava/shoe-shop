import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar.tsx";
import {CgProfile} from "react-icons/cg";
import {Link} from "react-router-dom";

const UserMenu = ({user}: {user: {
    image: string,
    name: string,
    role: string
    }})=>{
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <div className={"flex items-center gap-2"}>
                        <div className={"rounded-full bg-notification h-[3rem] w-[3rem] center-items"}>
                            {
                                user.image != '' ?
                                    <img className={'w-full h-full rounded-full object-cover'} src={user.image} alt={user.name}/>
                                    :
                                    <CgProfile className={"h-full w-full"}/>
                            }

                        </div>
                        <div>
                            <h2 className={"font-bold text-lg"}>{user.name}</h2>
                            <p className={"text-[rgba(87,88,100,.70)] font-light"}>{user.role}</p>
                        </div>
                    </div>
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link
                            to={"/admin/profile"}
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-primary-900 data-[focus]:text-gray-00">
                            Account
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <form onSubmit={e => e.preventDefault()}>
                            <button
                                type={"submit"}
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-primary-900 data-[focus]:text-gray-00">
                                Log Out</button>
                        </form>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}

export default UserMenu