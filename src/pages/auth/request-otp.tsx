import {useForm} from "react-hook-form";
import {requestResetPasswordSchema} from "@/assets/types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import z from 'zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from "@/components/ui/input.tsx";
import {useNavigate} from "react-router-dom";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
const RequestOtp = ()=>{
    const navigate = useNavigate()
    const form = useForm<z.infer <typeof requestResetPasswordSchema>>({
        resolver: zodResolver(requestResetPasswordSchema),
        defaultValues: {
            email: ""
        }
    })
    const submitForm = (data: z.infer<typeof requestResetPasswordSchema>)=>{
        console.log(data)
        navigate('/admin/enter-otp')
    }
    return (
        <>
            <div className={"w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                <div className={"bg-white max-w-[75rem] w-full p-6 md:p-16 mx-auto mt-16"}>
                    <div className={"max-w-[35rem] w-full p-8 vertical-spacing bg-white rounded-xl border mx-auto"}>
                        <h3 className={"text-2xl md:text-5xl font-extrabold md:text-center text-primary"}>Enter Email</h3>
                        <p className={"text-gray-8 text-sm text-center"}>Enter your email to receive OTP</p>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(submitForm)}
                                  className={"w-full vertical-spacing gap-6 mt-4"}>
                                <FormField
                                    control={form.control}
                                    name={"email"}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Email Address
                                                <span className={"text-sm text-secondary"}>*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                                    <Input
                                                        placeholder="enter email" {...field}
                                                        type={"email"}
                                                        required={true}
                                                        className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>

                                    )}
                                />
                                <SubmitButton title={'Request OTP'} />
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RequestOtp