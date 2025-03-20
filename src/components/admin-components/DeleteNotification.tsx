import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {ReactNode, useState} from "react";
import {notifications} from "@/assets/data.ts";
import {Notification} from "@/assets/types.ts";

interface Props {
    children: ReactNode;
    notificationId: string;
}
const DeleteNotification = ({children, notificationId}: Props)=>{
    const notification: Notification | undefined = notifications.find(notification=> notification.id === notificationId)
    const [openModel, setOpenModel] = useState(false);
    const handleCloseModel =()=>{
        setOpenModel(prev => !prev)
    }
    return (
        <>
            <Dialog open={openModel} onOpenChange={handleCloseModel}>
                <DialogTrigger>
                    {children}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure you want to delete {notification?.title}?</DialogTitle>
                    </DialogHeader>
                    <div className={"grid grid-cols-2 gap-4"}>
                        <form onSubmit={e=>e.preventDefault()} className={"block w-full px-6 py-3 bg-orange-5 text-white rounded-lg"}>
                            <button type={"submit"} className={"w-full"}>Proceed</button>
                        </form>
                        <button onClick={handleCloseModel} className={"w-full px-6 py-3 text-gray-8 border-[1px] bg-transparent rounded-lg"}>Cancel</button>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default DeleteNotification