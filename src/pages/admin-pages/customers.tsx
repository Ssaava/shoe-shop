import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {customers} from "@/assets/data.ts";
import {LuEye} from "react-icons/lu";
import {CiEdit, CiSearch} from "react-icons/ci";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {RiDeleteBinLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import DeleteCustomer from "@/components/admin-components/customers-components/DeleteCustomer.tsx";
import AddButton from "@/components/admin-components/AddButton.tsx";


const Customers = ()=>{
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>Customers List</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Customers</BreadcrumbPage>
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
                                       placeholder={"search customers..."}
                                       className={"w-full py-2 ring-0 bg-none border-none outline-none"}/>
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
                                        <SelectItem value="Last Name">Last Name</SelectItem>
                                        <SelectItem value="First Name">Fist Name</SelectItem>
                                    </SelectContent>
                                </Select>
                            </form>
                        </div>
                        <AddButton title={'Add New Customer'} link={'/admin/add-new-customer'}/>
                    </div>
                    <div>
                        <Table className={"min-w-[46rem]"}>
                            <TableHeader>
                                <TableRow className={"font-bold"}>
                                    <TableHead>ID</TableHead>
                                    <TableHead>First Name</TableHead>
                                    <TableHead>Last Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                {
                                    customers.map(({id, firstName, lastName, email}) => (
                                        <TableRow key={id} className={"text-gray-8"}>
                                            <TableCell>{id}</TableCell>
                                            <TableCell>{firstName}</TableCell>
                                            <TableCell>{lastName}</TableCell>
                                            <TableCell>{email}</TableCell>
                                            <TableCell>
                                                <div className={"flex gap-4 items-center text-2xl"}>
                                                    <Link to={`/admin/customer/${id}`}
                                                          className={"text-blue-5"}><LuEye/></Link>
                                                    <Link to={`/admin/edit-customer/${id}`}
                                                          className={"text-green-5"}><CiEdit/></Link>
                                                    <DeleteCustomer customerId={id}>
                                                        <button className={"text-orange-5"}><RiDeleteBinLine/></button>
                                                    </DeleteCustomer>
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

export default Customers