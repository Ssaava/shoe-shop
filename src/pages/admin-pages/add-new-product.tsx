import {Link, useOutletContext} from "react-router-dom";
import z from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import shoes from "/images/nike-shoes.png";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {ChangeEvent, useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone';
import { Input } from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {brands} from "@/assets/data.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {productSchema} from "@/assets/types.ts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Form,
    FormControl, FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";


const AddNewProduct = ()=>{

    const [droppedImage, setDroppedImage] = useState<string[]>([]);
    const {toggleSidebar}: {toggleSidebar: boolean} = useOutletContext();
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            productName: "",
            category: "",
            gender: '',
            quantity: 0,
            price: "",
            date: new Date(),
            size: "",
            brand: "",
            availability: "",
            image: "",
        }
    });
    // @ts-ignore
    const onDrop = useCallback((acceptedFiles) => {
        const newImages = acceptedFiles.map((file: Blob | MediaSource) => URL.createObjectURL(file));
        setDroppedImage(prevImages => [...prevImages, ...newImages]);
    }, [])
// Handle images selected via the input field
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        const newImages = selectedFiles.map((file) => URL.createObjectURL(file));
        console.log(newImages)
        setDroppedImage(prevImages => [...prevImages, ...newImages]);
    };
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
    })
    const submitForm = (data: z.infer<typeof productSchema>)=>{
        console.log(data);
    }
    return(
        <>
            <div className={"vertical-spacing flex-wrap"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>Add New Product</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <Link to={"/admin/"}>Dashboard</Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <Link to={"/admin/products"}>Products</Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Add New Product</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitForm)}>
                        <div
                            className={`grid ${toggleSidebar ? "lg:grid-cols-1 xl:grid-cols-2" : ""} lg:grid-cols-2 gap-4`}>
                            <div className={"vertical-spacing gap-8 bg-white p-6 rounded-lg"}>
                                {/*Product Name Field*/}
                                <FormField
                                    control={form.control}
                                    name="productName"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Product Name <span
                                                className={"text-sm text-orange-5"}>*</span></FormLabel>
                                            <FormControl>
                                                <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                                    <Input placeholder="product name" {...field}
                                                           className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}/>
                                                </div>
                                            </FormControl>
                                            <FormDescription>Do not exceed 20 characters when entering the product
                                                name.</FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <div className={"grid grid-cols-2 gap-4"}>
                                    {/*category field*/}
                                    <FormField
                                        control={form.control}
                                        name="category"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className={"text-lg"}>Category <span
                                                    className={"text-sm text-orange-5"}>*</span></FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className={"shadow-none py-5"}>
                                                                <SelectValue
                                                                    placeholder="Select Category"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {
                                                                brands.map(({id, category}) => (
                                                                        <SelectItem key={id} value={category}>{category}</SelectItem>
                                                                    )
                                                                )
                                                            }
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    {/*gender field*/}
                                    <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className={"text-lg"}>Gender <span
                                                    className={"text-sm text-orange-5"}>*</span></FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className={"shadow-none py-5"}>
                                                                <SelectValue placeholder="Select Gender"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="Male">Male</SelectItem>
                                                            <SelectItem value="Female">Female</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/*Brand Field*/}
                                <FormField
                                    control={form.control}
                                    name="brand"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Brand <span
                                                className={"text-sm text-orange-5"}>*</span></FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className={"shadow-none py-5"}>
                                                            <SelectValue placeholder="select brancd"/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {
                                                            brands.map(({id, name}) => (
                                                                <SelectItem key={id} value={name}>{name}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                {/*Description*/}
                                <FormField
                                    control={form.control}
                                    name="brand"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Description <span
                                                className={"text-sm text-orange-5"}>*</span></FormLabel>
                                            <FormControl>
                                                <Textarea placeholder={"Product Description"} rows={5} {...field} />
                                            </FormControl>
                                            <FormDescription>Do not exceed 100 characters when entering the product
                                                name.</FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/*Side Bar*/}
                            <div className={"vertical-spacing gap-8 bg-white p-6 rounded-lg"}>
                                <div className={"grid grid-cols-3 gap-4"}>
                                    <div className={"h-48 bg-red-200 w-full rounded-lg"}>
                                        <img src={shoes} alt={"Shoes"}
                                             className={"block w-full h-full object-cover rounded-lg"}/>
                                    </div>
                                    {
                                        droppedImage.map((image: string, index) => (
                                            <div
                                                key={index}
                                                className={`h-48 bg-red-200 w-full rounded-lg`}>
                                                <img src={image} alt={"Shoes"}
                                                     className={`block w-full h-full object-cover rounded-lg`}/>
                                            </div>
                                        ))
                                    }

                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor={"drop-zone"}>
                                                    <div
                                                        {...getRootProps()}
                                                        className={"border-[2px] p-4 border-dashed border-blue-5 h-48 w-full rounded-lg center-items"}>
                                                        <div className={"vertical-spacing"}>
                                                            <AiOutlineCloudUpload
                                                                className={"mx-auto text-5xl text-blue-5"}/>
                                                            {
                                                                isDragActive ? <p>Drop the files here</p> :
                                                                    <p className={"text-gray-8 mx-auto w-fit"}>Drop your
                                                                        images here or select click to <span
                                                                            className={"text-blue-5"}>browse</span></p>

                                                            }
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...getInputProps({
                                                            onChange: handleFileChange,
                                                        })}
                                                        {...field}
                                                        id={"drop-zone"}
                                                        type={"file"}
                                                        multiple
                                                        className={"hidden"}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                <div className={"grid grid-cols-2 gap-4"}>
                                    {/*Price Component*/}
                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className={"text-lg"}>Product Price <span
                                                    className={"text-sm text-orange-5"}>*</span></FormLabel>
                                                <FormControl>
                                                    <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                                        <Input
                                                            placeholder="product price" {...field}
                                                            className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}/>
                                                    </div>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    {/*Quantity Component*/}
                                    <FormField
                                        control={form.control}
                                        name="quantity"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className={"text-lg"}>Quantity <span
                                                    className={"text-sm text-orange-5"}>*</span></FormLabel>
                                                <FormControl>
                                                    <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                                        <Input
                                                            type={"number"}
                                                            placeholder="product quantity" {...field}
                                                            className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}/>
                                                    </div>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    {/*category field*/}
                                    <FormField
                                        control={form.control}
                                        name="size"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className={"text-lg"}>Add Size</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className={"shadow-none py-5"}>
                                                                <SelectValue
                                                                    placeholder="Select size"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="24">23</SelectItem>
                                                            <SelectItem value="23">24</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    {/*gender field*/}
                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className={"text-lg"}>Product Date</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl className={"shadow-none py-5"}>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-[240px] pl-3 text-left font-normal",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span>Pick a date</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <SubmitButton title={'Add Product'}/>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}

export default AddNewProduct;