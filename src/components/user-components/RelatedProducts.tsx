import { Product } from "@/assets/types";
import { gradientBackground } from "@/assets/utils";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const RelatedProducts = ({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) => {
  return (
    <>
      <div>
        <h3
          className={"text-2xl text-secondary md:text-6xl font-extrabold my-20"}
        >
          Related Products
        </h3>
        {relatedProducts.length === 0 ? (
          <p>There are currently no related products</p>
        ) : (
          <div className={"grid grid-cols-4 gap-4"}>
            {relatedProducts.map(({ id, image, name, category, price }) => (
              <div key={id}>
                <Link
                  to={`/product/${id}`}
                  reloadDocument
                  className={
                    "group w-full bg-white flex items-center justify-center p-4"
                  }
                  style={gradientBackground}
                >
                  <img
                    src={image}
                    alt={name}
                    className={"group-hover:scale-105 duration-700"}
                  />
                </Link>
                <div className={"vertical-spacing gap-2 w-fit mx-auto py-6"}>
                  <p className={"text-sm text-center"}>{category}</p>
                  <Link
                    to={`/product/${id}`}
                    reloadDocument
                    className={"font-extrabold text-lg block text-center"}
                  >
                    {name}
                  </Link>
                  <div className={"flex gap-2 items-center w-fit mx-auto"}>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={3}
                      readOnly={true}
                    />
                  </div>
                  <div className={"flex items-center gap-2 w-fit mx-auto"}>
                    <p className={"text-sm line-through text-gray-8"}>$22.00</p>
                    <p className={"text-sm"}>{price}</p>
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

export default RelatedProducts;
