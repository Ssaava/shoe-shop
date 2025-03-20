import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog.tsx"
import {ReactNode, useState} from "react";
import {brands} from "@/assets/data.ts";

interface Props {
    children: ReactNode;
    categoryId: string;
}
const DeleteCategory = ({children, categoryId}: Props)=>{
    const category = brands.find((brand: { id: string; })=> brand.id === categoryId)

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
                        <DialogTitle>Are you sure you want to delete Category {category?.category}?</DialogTitle>
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

export default DeleteCategory