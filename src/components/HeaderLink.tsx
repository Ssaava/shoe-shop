import {Link} from "react-router-dom";
import {useActiveNav} from "@/assets/utils.tsx";

interface Props {
    title: string;
    link: string;
    activeBar: string | null;
    handleActiveBar: (value: string)=> void
}
const HeaderLink = ({title, link, handleActiveBar, activeBar}: Props)=>{
    const {path} = useActiveNav();
    const generatedLink: string = link === '/' ? "/" : `/${link}`
    return (
        <Link
            onClick={()=>handleActiveBar(link)}
            to={generatedLink}
            className={`${activeBar === link || path === generatedLink ? "text-primary font-medium ": "text-900"} hover:text-primary hover:font-medium hover:bg-primary-50 px-4 py-1 rounded-lg duration-300`}
        >
            {title}
        </Link>
    )
}

export default HeaderLink