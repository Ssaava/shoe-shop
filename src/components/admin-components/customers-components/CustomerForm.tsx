// @ts-nocheck

import {LuEye, LuEyeOff} from "react-icons/lu";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";
import usePasswordToggle from "@/assets/utils.tsx";
import {createUserSchema, CustomerFormType} from "@/assets/types.ts";
import {UseFormReturn} from "react-hook-form";
import z from "zod";
import { Switch } from "@/components/ui/switch"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
const CustomerForm = ({form, submitForm, action}: {
    form: UseFormReturn<CustomerFormType>,
    submitForm?: (data: z.infer<typeof createUserSchema>) => void,
    action?: string
})=>{
    const {showPassword, handleShowPassword} = usePasswordToggle();
    return (
        <Form {...form}>
            {/*Add use form*/}
            <form onSubmit={form.handleSubmit(submitForm)}
                  className={"w-full vertical-spacing mt-4 gap-6"}>
                <div className={'mt-8 rounded-lg p-6 flex gap-8 flex-wrap bg-white'}>
                    <div className={"vertical-spacing"}>
                        <h2 className={"text-lg md:text-2xl font-extrabold"}>Account</h2>
                        <p>Fill in the information below to add new account </p>
                    </div>

                    <div className={'flex-1 vertical-spacing'}>
                        <FormField
                            control={form.control}
                            name={"firstName"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-lg"}>First Name <span
                                        className={"text-sm text-orange-5"}>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                            <Input
                                                placeholder="enter first name" {...field}
                                                type={"text"}
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
                            name={"lastName"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-lg"}>Last Name</FormLabel>
                                    <FormControl>
                                        <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                            <Input
                                                autoComplete={"off"}
                                                placeholder="enter last Name" {...field}
                                                type={"text"}
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
                            name={"email"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-lg"}>Email Address <span
                                        className={"text-sm text-orange-5"}>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                            <Input
                                                autoComplete={"off"}
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
                                    <FormLabel className={"text-lg"}>Password <span
                                        className={"text-sm text-orange-5"}>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div
                                            className={"md:ml-2 border-[1px] rounded-lg px-4 py-2 flex items-center gap-4 justify-between"}>
                                            <Input
                                                autoComplete={"off"}
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

                        <FormField
                            control={form.control}
                            name={"confirmPassword"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-lg"}>Confirm Password <span
                                        className={"text-sm text-orange-5"}>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div
                                            className={"md:ml-2 border-[1px] rounded-lg px-4 py-2 flex items-center gap-4 justify-between"}>
                                            <Input
                                                autoComplete={"off"}
                                                placeholder="confirm password" {...field}
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
                    </div>
                </div>
                {/*Permissions*/}
                <div className={"bg-white my-8 rounded-lg p-6 flex gap-8 flex-wrap"}>
                    <div>

                        <div className={"vertical-spacing"}>
                            <h2 className={"text-lg md:text-2xl font-extrabold"}>Permissions</h2>
                            <p>Items that the account is allowed to edit</p>
                        </div>
                    </div>
                    <div className={"flex-1 vertical-spacing"}>
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Admin
                                        </FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            value={'admin'}
                                            checked={field.value === "admin"}
                                            onCheckedChange={() => field.onChange("admin")}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Staff
                                        </FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            value={'staff'}
                                            checked={field.value === "staff"}
                                            onCheckedChange={() => field.onChange("staff")}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            User
                                        </FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            value={'user'}
                                            checked={field.value === "user"}
                                            onCheckedChange={() => field.onChange("user")}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/*<div>*/}
                        {/*    <h2 className={"text-lg font-medium"}>Admin</h2>*/}
                        {/*    <div className={"flex items-center gap-8"}>*/}
                        {/*        <Switch name={'role'} value={'admin'}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <h2 className={"text-lg font-medium"}>Staff</h2>*/}
                        {/*    <div className={"flex items-center gap-8"}>*/}
                        {/*        <Switch name={'role'} value={'staff'}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <h2 className={"text-lg font-medium"}>User</h2>*/}
                        {/*    <div className={"flex items-center gap-8"}>*/}
                        {/*        <Switch name={'role'} value={'user'}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <SubmitButton title={`${action == 'edit' ? 'Edit Customer' : 'Add New Customer'}`}/>
            </form>
        </Form>
    )
}

export default CustomerForm