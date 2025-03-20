import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {CiEdit, CiSearch} from "react-icons/ci";
import {LuPlus} from "react-icons/lu";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {brands} from "@/assets/data.ts";
import {RiDeleteBinLine} from "react-icons/ri";
import DeleteBrand from "@/components/admin-components/brand-components/DeleteBrand.tsx";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {useState} from "react";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";

const Brands = ()=>{
    const [brandValue, setBrandValue] = useState('')

    const handleSetBrandValue = (value: string)=>{
        setBrandValue(value)
    }
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>Brand List</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Brands</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
                {/*Top Selling Products*/}
                <div className={"bg-white p-6 rounded-lg vertical-spacing overflow-hidden"}>
                    <div className={"flex items-center justify-between flex-wrap gap-4"}>
                        <div className={"flex gap-4 items-center flex-wrap"}>
                            <form
                                onSubmit={e => e.preventDefault()}
                                className={"rounded-xl border-[1px] px-6 border-gray-[#111111] flex gap-4 items-center"}>
                                <input type={"search"}
                                       placeholder={"search here brands"}
                                       className={"w-full py-3 ring-0 bg-none border-none outline-none"}/>
                                <button type={"submit"} className={"border-none shadow-none"}>
                                    <CiSearch className={"text-2xl"}/>
                                </button>
                            </form>
                            <form
                                onSubmit={e => e.preventDefault()}
                                className={"flex gap-4 items-center"}>
                                <Select>
                                    <SelectTrigger
                                        className="flex items-center justify-center py-5">
                                        <SelectValue placeholder="Filter"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="a to z">A to Z</SelectItem>
                                        <SelectItem value="z to a">Z to A</SelectItem>
                                    </SelectContent>
                                </Select>
                            </form>
                        </div>

                        <Dialog>
                            <DialogTrigger
                                className={" min-w-[9rem] border-[1px] border-primary text-primary flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white hover:border-primary duration-300"}>
                                <LuPlus/>Add New Product Brand
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Create New Brand</DialogTitle>
                                    <DialogDescription>
                                        <form method={"post"} action={"#"} className={"vertical-spacing mt-4"}>
                                            <Label htmlFor={'category'} className={"text-black"}>Brand Name</Label>
                                           <Input type={"text"} id="brand" name={"brand"} placeholder={"brand name"} className={"text-black"}/>
                                            <SubmitButton title={'Create'}/>
                                       </form>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </div>
                    <div>
                        <Table className={"min-w-[46rem]"}>
                            <TableHeader>
                                <TableRow className={"font-bold"}>
                                    <TableHead>Brand Id</TableHead>
                                    <TableHead>Brand Name</TableHead>
                                    <TableHead className={"text-right"}>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {
                                    brands.map(({id,name})=>(
                                        <TableRow key={id} className={"text-gray-8"}>
                                            <TableCell>#{id}</TableCell>
                                            <TableCell>{name}</TableCell>
                                            <TableCell className={"flex justify-end"}>
                                                <div className={"flex gap-4 items-center text-2xl"}>
                                                    <Dialog>
                                                        <DialogTrigger className={"text-green-5"}>
                                                            <CiEdit  onClick={()=>handleSetBrandValue(name)}/>
                                                        </DialogTrigger>
                                                        <DialogContent>
                                                            <DialogHeader>
                                                                <DialogTitle>Edit {name}</DialogTitle>
                                                                <DialogDescription>
                                                                    <form method={"post"} action={"#"} className={"vertical-spacing mt-4"}>
                                                                        <Label htmlFor={'brand'} className={"text-black"}>Brand Name</Label>
                                                                        <Input
                                                                            onChange={
                                                                                (e)=> handleSetBrandValue(e.target.value)
                                                                            }
                                                                            type={"text"}
                                                                            id="brand"
                                                                            name={"brand"}
                                                                            placeholder={"brand name"}
                                                                            value={brandValue}
                                                                            className={"text-black"}
                                                                        />
                                                                        <SubmitButton title={'Update Brand'}/>
                                                                    </form>
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                        </DialogContent>
                                                    </Dialog>

                                                    <DeleteBrand brandId={id}>
                                                        <button className={"text-orange-5"}><RiDeleteBinLine/></button>
                                                    </DeleteBrand>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Brands