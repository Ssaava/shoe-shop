import {ReactNode} from "react";

interface Props{
    title: string;
    value: string | number | ReactNode
}

const SummaryItems = ({title, value}:Props)=>{
    return (
        <div className={"grid grid-cols-2 justify-between gap-4"}>
            <p className={"font-medium"}>{title}</p>
            <div className={"text-end text-sm"}>{value}</div>
        </div>
    )
}

export default SummaryItems