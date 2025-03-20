import {Rating} from "@smastrom/react-rating";
import {Link} from "react-router-dom";

interface Props{
    image: string;
    name: string;
    category: string;
    price: string;
    productId?: string;
    className?: string;
}
const ProductCard = ({image, name, category, price, productId, className}:Props)=>{
    const gradientBackground = {
        background:"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)",
}
    return (
        <>
            <div className={`${className} min-w-[18.75rem] rounded-lg shadow-md`}>
                <Link to={`/product/${productId}`} reloadDocument style={gradientBackground} className={"rounded-t-lg w-full h-[17.5rem] bg-white flex items-center justify-center p-4"}>
                    <img src={image} alt={name} className={"block my-auto"}/>
                </Link>
                <div className={"p-4 py-4 rounded-b-lg"}>
                    <div className={"flex flex-col gap-1 w-fit"}>
                        <p className={"text-sm text-gray-8"}>{category}</p>
                        <Link to={`/product/${productId}`} reloadDocument className={""}>{name}</Link>
                        <div className={"flex gap-2 text-secondary items-center"}>
                            <Rating style={{ maxWidth: 70}} value={3} readOnly={true}/>
                        </div>
                        <p className={"text-lg font-medium"}>{price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard