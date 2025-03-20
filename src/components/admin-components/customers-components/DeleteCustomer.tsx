import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {ReactNode, useState} from "react";
import {customers} from "@/assets/data.ts";

interface Props {
    children: ReactNode;
    customerId: string;
}
const DeleteCustomer = ({children, customerId}: Props)=>{
    const customer = customers.find((customer: { id: string; })=> customer.id === customerId)

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
                        <DialogTitle>Are you sure you want to delete {customer?.firstName} {customer?.lastName}?</DialogTitle>
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

export default DeleteCustomer