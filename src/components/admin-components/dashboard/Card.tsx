import {FaArrowDown, FaArrowUp} from "react-icons/fa6";
import {ReactNode} from "react";
type Props = {
    title: string;
    total: string;
    icon: ReactNode;
    stats: string;
}
const Card =({title, total, icon, stats}: Props)=> {
    return (
        <div className={"rounded-lg bg-white py-4 px-6 flex items-center"}>
            <div className={"flex-1 flex items-center gap-2"}>
                <div className={"clip-hexagon bg-primary-50 center-items p-2"}>
                    <div className={"text-3xl text-primary"}>
                        {icon}
                    </div>
                </div>
                <div>
                    <p className={"text-[rgb(87,88,100)]"}>{title}</p>
                    <h2 className={"font-bold text-lg"}>{total}</h2>
                </div>
            </div>
            <div className={"flex items-center gap-2 "}>
                {
                    stats === "up" ?
                        <>
                            <p className={"text-green-5 font-light"}>1.27</p>
                            <FaArrowUp className={"text-green-5 font-light"}/>
                        </>:
                        <>
                            <p className={"text-orange-5 font-light"}>0.12</p>
                            <FaArrowDown className={"text-orange-5 font-light"}/>
                        </>
                }
            </div>
        </div>
    )
}


export default Card;