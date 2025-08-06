import { useAuthStore } from "@/store/store";
import { useEffect } from "react";
import logo from "/full-logo.png";
import { Outlet } from "react-router-dom";

const CheckAuthToken = () => {
  const refreshToken = useAuthStore((state) => state.refreshToken);
  const loading = useAuthStore((state) => state.loading);
  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <img className="animate-bounce" src={logo} alt="" />
        <p className="animate-pulse">Loading shop...</p>
      </div>
    );

  return <Outlet />;
};

export default CheckAuthToken;
