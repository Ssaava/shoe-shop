import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {useState} from 'react'
import {CiSearch} from "react-icons/ci";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {notifications} from "@/assets/data.ts";
import {Link} from "react-router-dom";
import {LuEye} from "react-icons/lu";
import {RiDeleteBinLine} from "react-icons/ri";
import {shortenText, sortNotificationsByStatus} from "@/assets/utils.tsx";
import DeleteNotification from "@/components/admin-components/DeleteNotification.tsx";

const NotificationsPage = ()=>{
    const [notificationStatus, setNotificationStatus] = useState<string>('unread')
    const handleNotificationStatus  = (status: string) =>{
        setNotificationStatus(status)
    }
    return (
        <>
            <div className={"mb-8 flex items-center justify-between gap-4"}>
                <h2 className={"text-2xl font-bold"}>Notifications</h2>
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
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
                {/**/}
                <div className={"bg-white p-6 rounded-lg vertical-spacing overflow-hidden"}>
                    <div className={"flex items-center justify-between flex-wrap gap-4"}>
                        <div className={"flex gap-4 items-center flex-wrap"}>
                            <form
                                onSubmit={e => e.preventDefault()}
                                className={"rounded-xl border-[1px] px-6 border-gray-[#111111] flex gap-4 items-center"}>
                                <input type={"search"}
                                       placeholder={'serach notification'}
                                       className={"w-full py-2 ring-0 bg-none border-none outline-none"}/>
                                <button type={"submit"} className={"border-none shadow-none"}>
                                    <CiSearch className={"text-2xl"}/>
                                </button>
                            </form>
                            <div className={"flex gap-4 items-center"}>
                                <Select onValueChange={e=>handleNotificationStatus(e)}>
                                    <SelectTrigger

                                        className="flex items-center justify-center py-5">
                                        <SelectValue placeholder="Filter"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="read">Read</SelectItem>
                                        <SelectItem value="unread">Unread</SelectItem>
                                        <SelectItem value="recent">Recent</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Table className={"min-w-[46rem]"}>
                            <TableHeader>
                                <TableRow className={"font-bold"}>
                                    <TableHead>Notification ID</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Message</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {
                                    sortNotificationsByStatus(notifications, notificationStatus).slice(0, 10).map(({
                                                                 id,
                                                                 title, status,
                                                                 message,
                                                             }) => (
                                        <TableRow key={id} className={`${status == 'read' ? 'text-gray-8' : 'text-black font-bold'}`}>
                                            <TableCell className={"flex gap-2 items-center"}>
                                                #{id}
                                            </TableCell>
                                            <TableCell>{title}</TableCell>
                                            {/*</TableCell>*/}
                                            <TableCell>
                                                {shortenText(message, 100)}
                                            </TableCell>
                                            <TableCell>
                                                <div className={"flex gap-4 items-center text-2xl"}>
                                                    <Link to={`/admin/notification/${id}`} className={"text-blue-5"}><LuEye/></Link>
                                                    <DeleteNotification notificationId={id}>
                                                        <button className={"text-orange-5"}><RiDeleteBinLine/></button>
                                                    </DeleteNotification>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
        </>
    )
}

export default NotificationsPage