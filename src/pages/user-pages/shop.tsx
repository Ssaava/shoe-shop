import { gradientBackground } from "@/assets/utils.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Filter from "@/components/user-components/Filter.tsx";
import { useProductStore } from "@/store/store";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const Shop = () => {
  const fetchingProducts = useProductStore((state) => state.fetchingProducts);
  const products = useProductStore((state) => state.products);

  return (
    <>
      <div className={"inline-padding bg-[#F2F4F6] py-16"}>
        <div className={"flex items-center justify-between mb-10"}>
          <Filter />
          <div className={"flex items-center gap-4"}>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Default Setting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Setting</SelectItem>
                <SelectItem value="popularity">Sort by Popularity</SelectItem>
                <SelectItem value="latest">Sort by Latest</SelectItem>
                <SelectItem value="rating">Sort by Rating</SelectItem>
                <SelectItem value="lowest-to-highest">
                  Sort by Price: Lowest to Highest
                </SelectItem>
                <SelectItem value="highest-to-lowest">
                  Sort by Price: Highest to Lowest
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/*Products*/}

        {fetchingProducts ? (
          <>Loading...</>
        ) : (
          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4"
            }
          >
            {products.map(({ _id, images, name, category, price }) => (
              <div key={_id} className={"min-h-[32.616rem]"}>
                <Link
                  to={`/product/${_id}`}
                  className={
                    "group w-full max-h-[19.688rem] h-full bg-white flex items-center justify-center p-4"
                  }
                  style={gradientBackground}
                >
                  <img
                    src={images[0].url}
                    alt={"Product Name"}
                    className={
                      "group-hover:scale-110 duration-700 block max-h-[14rem] max-w-[14rem] w-full h-full object-cover"
                    }
                  />
                </Link>
                <div className={"vertical-spacing gap-2 w-fit mx-auto py-6"}>
                  <p className={"text-sm text-center text-green-5"}>
                    {category?.name}
                  </p>
                  <Link
                    to={`/product/${_id}`}
                    className={"font-extrabold text-lg block text-center"}
                  >
                    {name}
                  </Link>
                  <div className={"w-fit mx-auto"}>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={3}
                      readOnly={true}
                    />
                  </div>
                  <div className={"flex items-center gap-2 w-fit mx-auto"}>
                    <p className={"text-sm line-through text-gray-8"}>
                      2500ugx
                    </p>
                    <p className={"font-medium"}>{price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
