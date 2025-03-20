import {useParams} from "react-router-dom";

import {notifications} from "@/assets/data.ts";
import {Notification} from "@/assets/types.ts";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {RxAvatar} from "react-icons/rx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
const NotificationPage = ()=> {
    const {notificationId} = useParams()
    const notification: Notification | undefined = notifications.find(({id}) => id == notificationId)
    return (
        <>
                <div className={"mb-8 flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>Notification #{notification?.id}</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/notifications">Notifications</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{notification?.title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
                <div className={"vertical-spacing bg-white rounded-lg p-4 w-full"}>
                    <div className={"flex items-center gap-4"}>
                        <Avatar>
                            <AvatarImage className={'object-cover'} src={notification?.customerProfile.profileImage}/>
                            <AvatarFallback>
                                <RxAvatar className={'w-full h-full text-primary group-hover:text-primary'}/>
                            </AvatarFallback>
                        </Avatar>
                        <div className={'vertical-spacing gap-2'}>
                            <h3 className={'font-medium'}>{notification?.customerProfile.name}</h3>
                            <p className={'text-sm font-light'}>{notification?.customerProfile.email}</p>
                        </div>
                    </div>
                    <div className={'vertical-spacing'}>
                        <h3 className={'text-lg font-bold'}>{notification?.title}</h3>
                        <p className={'text-justify font-light text-text-100'}>{notification?.message}</p>
                    </div>
                </div>
            </>
    )
}
export default NotificationPage