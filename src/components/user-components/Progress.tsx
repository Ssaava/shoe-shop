import {TiTick} from "react-icons/ti";
import {clsx} from "clsx";
import {BiPackage} from "react-icons/bi";
import {CiDeliveryTruck} from "react-icons/ci";
import {PiHandshake, PiNotepad} from "react-icons/pi";

interface Props {
    steps: number;
}
function Progress({steps = 0}: Props) {

    return (
        <div className="flex items-center mt-12 mb-28">

            <div className={clsx("max-w-[65rem] w-full mx-auto h-4 relative bg-[rgba(205,249,219,.7)]",{
                "progress-bg-1" : steps >= 1,
                "progress-bg-2" : steps >= 2,
                "progress-bg-3" : steps >= 3
            })}>
                <div
                    className={`${steps >= 1 ? 'bg-green-5 border-white' : 'bg-white border-green-5 '} absolute -left-1 top-1/2 -translate-y-1/2 h-10 w-10 center-items rounded-full border`}>
                    {
                        <>
                            <div className={'relative'}>
                                <TiTick className={`${steps >= 1 ? 'text-white' : 'text-white'} text-xl`}/>
                                <div className={"absolute -bottom-24 left-1/2 -translate-x-1/2"}>
                                    <div className={"center-items flex-col gap-2"}>
                                        <PiNotepad className={`${steps >= 1 ? 'text-green-5' : ''} text-3xl`}/>
                                        <p className={`text-nowrap`}>Order Placed</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className={`${steps >= 1 ? 'bg-green-5 border-white' : 'bg-white border-green-5'} absolute left-[33.3%] -translate-x-[33.3%] top-1/2 -translate-y-1/2 h-10 w-10 center-items rounded-full border`}>
                    {
                        <>
                            <div className={'relative'}>
                                <TiTick className={`${steps >= 2 ? 'text-white' : steps < 2 ? 'opacity-0' : 'text-white'} text-xl`}/>
                                <div className={"absolute -bottom-24 left-1/2 -translate-x-1/2 "}>
                                    <div className={`center-items flex-col gap-2`}>
                                        <BiPackage className={`${steps >= 2 ? 'text-green-5' : ''} text-3xl`}/>
                                        <p className={"text-nowrap"}>Packaging</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div
                    className={`${steps >= 2 ? 'bg-green-5 border-white' : 'bg-white border-green-5'} absolute left-[66.6%] -translate-x-[66.6%] top-1/2 -translate-y-1/2 h-10 w-10 center-items rounded-full border`}>
                    {
                        <>
                            <div className={'relative'}>
                                <TiTick className={`${steps >= 3 ? 'text-white' : steps < 3 ? 'opacity-0' : 'text-green-5'} text-white text-xl`}/>
                                <div className={"absolute -bottom-24 left-1/2 -translate-x-1/2 "}>
                                    <div className={`center-items flex-col gap-2`}>
                                        <CiDeliveryTruck className={`${steps >= 2 ? 'text-green-5' : ''} text-3xl`}/>
                                        <p className={`text-nowrap`}>On the Road</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div
                    className={`${steps >= 3 ? 'bg-green-5 border-white' : 'bg-white border-green-5'} absolute -right-1 top-1/2 -translate-y-1/2 h-10 w-10 center-items rounded-full border`}>
                    {
                        <>
                            <div className={'relative'}>
                                <TiTick className={`${steps >= 4 ? 'text-white' : steps < 4 ? 'opacity-0' : 'text-green'} text-white text-xl`}/>
                                <div className={"absolute -bottom-24 left-1/2 -translate-x-1/2 "}>
                                    <div className={`center-items flex-col gap-2`}>
                                        <PiHandshake className={`${steps >= 4 ? 'text-green-5' : ''} text-3xl`}/>
                                        <p className={"text-nowrap"}>Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Progress;
