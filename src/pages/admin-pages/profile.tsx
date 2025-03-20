import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import backgroundImage from '/background-images/user-details-bg.png';
import userImage from '/users/user-image-0.png';
import {Input} from "@/components/ui/input.tsx";
import {useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {IoCamera} from "react-icons/io5";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";

const Profile = ()=>{
    const [userForm, setUserForm] = useState<{
        firstName: string;
        lastName: string;
        contact: string;
        email: string;
        address: string;
        role: string;
    }>({
        firstName: 'Kato',
        lastName: 'Smith',
        contact: '+256 777777777',
        email: 'katosmith@gmail.com',
        address: 'Salaama',
        role: 'Admin'
    })

    const [passwordForm, setPasswordForm] = useState<{
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }>({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    const handleUserForm = (e: { target: { name: string; value: string | number; }; }) => {
        const {name, value} = e.target
        setUserForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handlePasswordForm = (e: { target: { name: string; value: string | number; }; }) => {
        const {name, value} = e.target
        setPasswordForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleUpdateProfile = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        // TODO: use either axios or fetch() api to submit the form with a post request of the userForm object
    }
    const handleUpdatePassword = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        // TODO: use either axios or fetch() api to submit the form with a post request of the passwordForm object
    }

    const handleProfileImageUpdate = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
    }
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl font-bold"}>User Profile</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>User Profile</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>

                <div className={"xl:flex gap-4 mt-8 xl:flex-wrap"}>
                    <div className={"xl:max-w-[35rem] mx-auto w-full bg-white rounded-lg vertical-spacing h-fit"}>
                        <div className={"vertical-spacing p-6 "}>
                            <div className={"relative rounded-lg w-full"}>
                                <div className={"w-full h-full relative"}>
                                    <img src={backgroundImage} alt={"Background image"}
                                         className={"rounded-lg block max-h-56 w-full object-cover"}/>
                                    <label
                                        htmlFor={'backgroundImage'}
                                        className={"flex items-center gap-2 cursor-pointer absolute bottom-1 right-1 p-2 rounded-lg bg-gray-300 z-10"}>
                                        <IoCamera className={"text-black text-lg md:text-2xl"}/> <span className={"hidden md:block"}>Edit Cover Photo</span>
                                    </label>
                                    <input type={'file'} id={'backgroundImage'} name={'backgroundImage'}
                                           className={"w-12 h-12 z-20 hidden"}/>

                                </div>

                                <div
                                    className={"flex items-center justify-center absolute -bottom-10 md:-bottom-20 w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full border-[.5rem] border-green-5 left-1/2 -translate-x-1/2"}>
                                    <img src={userImage} alt={"User Image"}
                                         className={"block rounded-full w-full h-full"}/>
                                    <label
                                        htmlFor={'profileImage'}
                                        className={"cursor-pointer absolute -bottom-3 -right-1 h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-300 z-10 flex items-center justify-center"}>
                                        <IoCamera className={"text-black text-lg md:text-2xl"}/>
                                    </label>
                                    <input onChange={handleProfileImageUpdate} type={'file'} id={'profileImage'} name={'profileImage'} className={"w-12 h-12 z-20 hidden"}/>
                                </div>
                            </div>
                            <div className={"vertical-spacing gap-1 w-fit mx-auto mt-8 md:mt-20 text-center"}>
                                <h2 className={"text-lg font-medium"}>{userForm?.firstName} {userForm?.lastName}</h2>
                                <p className={"text-sm text-light text-gray-8"}>{userForm?.role}</p>
                            </div>
                        </div>

                        <div className={"pb-2 bg-[rgba(0,0,0,.05)] rounded-b-lg"}>
                            <div className={"px-4 border-t py-2 pt-2"}>
                                <p className={"font-bold"}>Address: </p>
                                <p className={"text-gray-600 font-light"}>{userForm?.address}</p>
                            </div>
                            <div className={"px-4 border-t py-2"}>
                                <p className={"font-bold"}>Email: </p>
                                <a href={'mailto:emma@gmail.com'}
                                   className={"text-gray-600 font-light"}>{userForm?.email}</a>
                            </div>
                            <div className={"px-4 border-t py-2 pb-2"}>
                                <p className={"font-bold"}>Contact: </p>
                                <p className={"text-gray-600 font-light"}>{userForm?.contact}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"xl:flex-1 bg-white p-6 vertical-spacing mt-4 xl:mt-0 h-fit"}>
                        <h3 className={'font-extrabold text-xl md:text-3xl'}>Edit Profile</h3>
                        <form onSubmit={handleUpdateProfile} className={"vertical-spacing"}>
                            <div className={"grid md:grid-cols-2 gap-4"}>
                                <label className={"vertical-spacing font-bold"}>
                                    First name
                                    <Input type={"text"} value={userForm?.firstName} name={'firstName'} id={"firstName"}
                                           placeholder={'first name'}
                                           className={"w-full border px-6 block py-6 font-normal"}
                                           onChange={handleUserForm}/>
                                </label>
                                <label className={"vertical-spacing font-bold"}>
                                    Last name
                                    <Input type={"text"} value={userForm?.lastName} name={'lastName'} id={"lastName"}
                                           placeholder={'last name'}
                                           className={"w-full border px-6 block py-6 font-normal"}
                                           onChange={handleUserForm}/>
                                </label>
                                <label className={"vertical-spacing font-bold"}>
                                    Contact
                                    <Input type={"text"} value={userForm?.contact} name={'contact'} id={"contact"}
                                           placeholder={'enter phone number'}
                                           className={"w-full border px-6 block py-6 font-normal"}
                                           onChange={handleUserForm}/>
                                </label>
                                <label className={"vertical-spacing font-bold"}>
                                    Role
                                    <Select defaultValue={userForm?.role} name={'role'}
                                            onValueChange={value => setUserForm(prev => ({...prev, role: value}))}>
                                        <SelectTrigger className="w-full font-normal py-6">
                                            <SelectValue placeholder="Select Role"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Admin">Admin</SelectItem>
                                            <SelectItem value="Staff">Staff</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </label>
                            </div>
                            <div className={'vertical-spacing'}>
                                <label className={"vertical-spacing font-bold"}>
                                    Email
                                    <Input type={"email"} value={userForm?.email} name={'email'} id={"email"}
                                           placeholder={'enter email'}
                                           className={"w-full border px-6 block py-6 font-normal"}
                                           onChange={handleUserForm}/>
                                </label>
                                <label className={"vertical-spacing font-bold"}>
                                    Address
                                    <Input type={"text"} value={userForm?.address} name={'address'} id={"address"}
                                           placeholder={'enter current address'}
                                           className={"w-full border px-6 block py-6 font-normal"}
                                           onChange={handleUserForm}/>
                                </label>
                            </div>

                            <SubmitButton title={'Update Profile'}/>
                        </form>
                        <h3 className={'font-extrabold text-xl md:text-3xl mt-8'}>Update Password</h3>
                        <form onSubmit={handleUpdatePassword} className={"vertical-spacing"}>
                                <label className={"vertical-spacing font-bold"}>
                                    Email *
                                    <Input type={"email"} value={passwordForm?.oldPassword} name={'oldPassword'} id={"oldPassword"}
                                           placeholder={'enter old password'}
                                           className={"w-full border px-6 block py-6 font-normal"}
                                           onChange={handlePasswordForm}/>
                                </label>
                                <label className={"vertical-spacing font-bold"}>
                                    New Password *
                                    <Input type={"text"} value={passwordForm?.newPassword} name={'newPassword'} id={"newPassword"}
                                           placeholder={'new password'}
                                           className={"w-full border px-6 block py-6 font-normal"}
                                           onChange={handlePasswordForm}/>
                                </label>
                                <label className={"vertical-spacing font-bold"}>
                                    Confirm Password *
                                    <Input type={"text"} value={passwordForm?.confirmPassword} name={'confirmPassword'} id={"confirmPassword"}
                                           placeholder={'confirm Password'}
                                           className={"w-full border px-6 block py-6 font-normal"}
                                           onChange={handlePasswordForm}/>
                                </label>
                            <SubmitButton title={'Update Password'} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile