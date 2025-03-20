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
import CustomerForm from "@/components/admin-components/customers-components/CustomerForm.tsx";

const AddNewCustomer = ()=>{
    const form = useForm<z.infer <typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            addProduct: false,
            upDateProduct: false,
            deleteProduct: false,
            role: "",
        }
    })

    const submitForm = (data: z.infer<typeof createUserSchema>)=>{
        console.log(data)
    }
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl md:text-3xl font-bold"}>Add new User</h2>
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
                                    <BreadcrumbPage>New User</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
            </div>
            <CustomerForm form={form} submitForm={submitForm} />
        </>
    )
}

export default AddNewCustomer