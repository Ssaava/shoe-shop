import {LuEye, LuEyeOff} from "react-icons/lu";
import usePasswordToggle from "@/assets/utils.tsx";

interface Props {
    title: string;
    handlePasswordForm: (e: {target: {name: string; value: string | number;}; }) => void
}

const PasswordInput = ({title, handlePasswordForm}: Props)=>{
    const {showPassword, handleShowPassword} = usePasswordToggle()
    return (
        <>
            <div className={"vertical-spacing gap-2"}>
                <label htmlFor={'current-password'}>
                    {title}
                </label>
                <div className={'flex items-center gap-4 w-full px-5 py-2 border'}>
                    <input
                        onChange={handlePasswordForm}
                        type={showPassword ? "text" : "password"}
                        name={'newPassword'}
                        id={'current-password'}
                        placeholder={"8+ characters"}
                        className={'w-full border-none hover:ring-0 ring-0 outline-none active:outline-none'}
                    />
                    {
                        showPassword ?
                            <LuEye className={"text-xl"} onClick={handleShowPassword} /> :
                            <LuEyeOff className={"text-xl"} onClick={handleShowPassword} />
                    }
                </div>
            </div>
        </>
    )
}


export default PasswordInput