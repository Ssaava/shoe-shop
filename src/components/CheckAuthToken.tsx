import { useAuthStore } from "@/store/store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const CheckAuthToken = () => {
  const refreshToken = useAuthStore((state) => state.refreshToken);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);
  return <Outlet />;
};

export default CheckAuthToken;
