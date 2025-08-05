import { Outlet } from "react-router-dom";
import UserHeader from "@/components/user-components/UserHeader.tsx";
import UserFooter from "@/components/user-components/UserFooter.tsx";
import { useEffect } from "react";
import { useProductStore } from "@/store/store";

const UserLayout = () => {
  const getAllProducts = useProductStore((state) => state.getAllProducts);
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <>
      <div className={"flex flex-col min-h-screen"}>
        <UserHeader />
        <Outlet />
        <UserFooter />
      </div>
    </>
  );
};

export default UserLayout;
