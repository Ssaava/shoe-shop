import {useForm} from "react-hook-form";
import {resetPasswordSchema} from "@/assets/types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import z from 'zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from "@/components/ui/input.tsx";
import {LuEye, LuEyeOff} from "react-icons/lu";
import usePasswordToggle from "@/assets/utils.tsx";
import {useNavigate} from "react-router-dom";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
const ResetPassword = ()=>{
    const {showPassword, handleShowPassword} = usePasswordToggle()
    const navigate = useNavigate()
    const form = useForm<z.infer <typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            newPassword: "",
            confirmNewPassword: ""
        }
    })
    const submitForm = (data: z.infer<typeof resetPasswordSchema>)=>{
        console.log(data)
        navigate(0)
    }
    return (
        <>
            <div className={"w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                <div className={"bg-white max-w-[75rem] w-full p-6 md:p-16 mx-auto mt-16"}>
                    <div className={"max-w-[35rem] w-full p-8 vertical-spacing bg-white rounded-xl border mx-auto"}>
                        <h3 className={"text-2xl md:text-5xl font-extrabold md:text-center text-primary"}>Reset Password</h3>
                        <p className={"text-gray-8 text-sm text-center"}>Create New Password</p>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(submitForm)}
                                  className={"w-full vertical-spacing gap-6 mt-4"}>
                                <FormField
                                    control={form.control}
                                    name={"newPassword"}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>New Password
                                                <span className={"text-sm text-secondary"}>*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div
                                                    className={"md:ml-2 border-[1px] rounded-lg px-4 py-2 flex items-center gap-4 justify-between"}>
                                                    <Input
                                                        placeholder="enter password" {...field}
                                                        type={`${showPassword ? "text" : "password"}`}
                                                        required={true}
                                                        className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                                    />
                                                    {
                                                        showPassword ?
                                                            <button type={"button"} onClick={handleShowPassword}>
                                                                <LuEyeOff
                                                                    className={"text-2xl text-gray-3"}/></button> :
                                                            <button type={"button"} onClick={handleShowPassword}><LuEye
                                                                className={"text-2xl text-gray-3"}/>
                                                            </button>
                                                    }
                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>

                                    )}
                                /><FormField
                                control={form.control}
                                name={"confirmNewPassword"}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={"text-lg"}>Confirm Password
                                            <span className={"text-sm text-secondary"}>*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <div
                                                className={"md:ml-2 border-[1px] rounded-lg px-4 py-2 flex items-center gap-4 justify-between"}>
                                                <Input
                                                    placeholder="enter password" {...field}
                                                    type={`${showPassword ? "text" : "password"}`}
                                                    required={true}
                                                    className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                                />
                                                {
                                                    showPassword ?
                                                        <button type={"button"} onClick={handleShowPassword}>
                                                            <LuEyeOff
                                                                className={"text-2xl text-gray-3"}/></button> :
                                                        <button type={"button"} onClick={handleShowPassword}><LuEye
                                                            className={"text-2xl text-gray-3"}/>
                                                        </button>
                                                }
                                            </div>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>

                                )}
                            />
                                <SubmitButton title={'Reset password'} />
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResetPassword