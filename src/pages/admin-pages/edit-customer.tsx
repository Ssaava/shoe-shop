import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {useForm} from "react-hook-form";
import z from "zod";
import {createUserSchema} from "@/assets/types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useParams} from "react-router-dom";
import {customers} from "@/assets/data.ts";
import CustomerForm from "@/components/admin-components/customers-components/CustomerForm.tsx";

const AddNewCustomer = ()=>{
    const {customerId} = useParams()
    const customer = customers.find(customer => customer.id === customerId)
    const form = useForm<z.infer <typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            firstName: customer?.firstName,
            lastName: customer?.lastName,
            email: customer?.email,
            password: "",
            confirmPassword: "",
            addProduct: customer?.permissions?.["add-product"],
            upDateProduct: customer?.permissions?.["update-product"],
            deleteProduct: customer?.permissions?.["delete-product"],
            role: "admin",
        }
    })

    const submitForm = (data: z.infer<typeof createUserSchema>)=>{
        console.log(data)
    }
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl md:text-3xl font-bold"}>Edit {customer?.firstName + " " + customer?.lastName}</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/customers">Customers</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Edit User</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
            </div>
            <CustomerForm action={'edit'} form={form} submitForm={submitForm} />
        </>
)
}

export default AddNewCustomer