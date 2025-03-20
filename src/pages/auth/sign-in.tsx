import {useForm} from "react-hook-form";
import {loginSchema} from "@/assets/types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import z from 'zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from "@/components/ui/input.tsx";
import usePasswordToggle from "@/assets/utils.tsx";
import {LuEye, LuEyeOff} from "react-icons/lu";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Link, useNavigate} from "react-router-dom";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
const SignIn = ()=>{
    const {showPassword, handleShowPassword} = usePasswordToggle();
    const navigate = useNavigate()
    const form = useForm<z.infer <typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const submitForm = (data: z.infer<typeof loginSchema>)=>{
        console.log(data)
        navigate('/')
    }
    return (
        <>
            <div className={"md:min-h-[calc(100vh-6.25rem)] w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                <div className={"bg-white max-w-[75rem] w-full p-6 md:p-16 mx-auto mt-16"}>
                    <div className={"max-w-[35rem] w-full p-8 vertical-spacing bg-white rounded-xl border mx-auto"}>
                        <h3 className={"text-2xl md:text-5xl font-extrabold md:text-center text-primary"}>Sign in</h3>
                        <p className={"text-gray-8 text-sm text-center"}>Enter your email and password to login</p>
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

                                <FormField
                                    control={form.control}
                                    name={"password"}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Email Address
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

                                <div className="flex items-center justify-between mt-4">
                                    <div className={"flex items-center gap-4 text-sm text-gray-8"}>
                                        <Checkbox id="terms"/>
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Keep me signed in
                                        </label>
                                    </div>
                                    <Link to={"/auth/request-otp"} className={"text-sm text-blue-5"}>Forgot
                                        Password?</Link>
                                </div>
                            </form>
                            <SubmitButton  title={'Sign In'} />
                        </Form>
                        <div className={"mt-4"}>
                            <p className={"text-sm"}>You do not have an account yet? <Link to={"/auth/signup"}
                                                                                           className={"ml-1 text-blue-5"}>Signup</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn