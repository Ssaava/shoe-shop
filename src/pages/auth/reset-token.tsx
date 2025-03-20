import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import SubmitButton from "@/components/admin-components/SubmitButton.tsx";

const ResetToken = ()=>{
    const [otp, setOtp] = useState<string>("")
    const navigate = useNavigate()
    const submitForm = ()=>{
        console.log(otp)
        navigate('/auth/password-reset')
    }
    return (
        <>
            <div className={"w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                <div className={"bg-white max-w-[75rem] w-full p-6 md:p-16 mx-auto mt-16"}>
                    <div className={"max-w-[35rem] w-full p-8 vertical-spacing bg-white rounded-xl border mx-auto"}>
                        <h3 className={"text-2xl md:text-5xl font-extrabold md:text-center text-primary"}>Enter OTP</h3>
                        <p className={"text-gray-8 text-sm text-center"}>Enter OTP to reset Password</p>
                        <form onSubmit={submitForm}
                              className={"w-full vertical-spacing gap-6 mt-4"}>
                               <div className={'w-fit mx-auto'}>
                                   <InputOTP
                                       maxLength={6}
                                       value={otp}
                                       onChange={(value) => setOtp(value)}
                                   >
                                       <InputOTPGroup>
                                           <InputOTPSlot index={0} />
                                           <InputOTPSlot index={1} />
                                           <InputOTPSlot index={2} />
                                       </InputOTPGroup>
                                       <InputOTPSeparator />
                                       <InputOTPGroup>
                                           <InputOTPSlot index={3} />
                                           <InputOTPSlot index={4} />
                                           <InputOTPSlot index={5} />
                                       </InputOTPGroup>
                                   </InputOTP>
                               </div>
                            <SubmitButton title={"Reset Password"} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResetToken