import UserFooter from "@/components/user-components/UserFooter.tsx";
import UserHeader from "@/components/user-components/UserHeader.tsx";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
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
