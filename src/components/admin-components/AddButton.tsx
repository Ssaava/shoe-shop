import {LuPlus} from "react-icons/lu";
import {Link} from "react-router-dom";
interface Props {
    link?: string,
    title:string,
    className?: string,
    onclick?: ()=> void
    icon?: boolean
}
const AddButton = ({link='/', title, className, onclick, icon = true}:Props)=>{
    return (
        <Link to={link}
              onClick={onclick}
              className={`${className} min-w-[9rem] border-[1px] border-primary text-primary flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white hover:border-primary duration-300`}>
            {
                icon && <LuPlus/>
            }
            {title}
        </Link>
    )
}


export default AddButton