import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx";
import { useProductStore } from "@/store/store";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const products = useProductStore((state) => state.products);
  const product = products.find((product) => product._id === productId);
  return (
    <div className={"vertical-spacing"}>
      <div className={"flex items-center justify-between gap-4"}>
        <h2 className={"text-2xl font-bold"}>Product Details</h2>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to={"/admin"}>Dashboard</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to={"/admin/products"}>Products</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Product Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {product?.name}
    </div>
  );
};
export default Product;
