import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Notification } from "@/assets/types.ts";

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return { showPassword, handleShowPassword };
};
export const useActiveNav = () => {
  const [smallScreenNav, setSmallScreenNav] = useState(false);
  const [activeBar, setActiveBar] = useState<string | null>("");
  const location = useLocation();
  const path = location.pathname;
  const handleSmallScreenNav = () => {
    setSmallScreenNav((prev) => !prev);
  };
  const handleActiveBar = (value: string) => {
    setActiveBar(value);
    if (smallScreenNav) handleSmallScreenNav();
  };

  return {
    smallScreenNav,
    handleSmallScreenNav,
    activeBar,
    handleActiveBar,
    path,
  };
};

export const gradientBackground = {
  background:
    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)",
};

export const shadowBackground = {
  background:
    "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(94,94,94,0.21750707118785018) 27%, rgba(255,255,255,0) 100%)",
};

export const useProductCount = () => {
  const [productCounts, setProductCounts] = useState<{
    [key: string]: number;
  }>({});
  const handleProductCount = (productId: string, action: string) => {
    setProductCounts((prevCounts) => {
      const currentCount: number = prevCounts[productId] || 0;
      const newCount =
        action === "add" ? currentCount + 1 : Math.max(currentCount - 1, 0);
      return {
        ...prevCounts,
        [productId]: newCount,
      };
    });
  };
  return { productCounts, handleProductCount };
};

export const extractNum = (value: string) => {
  return parseInt(value.replace(/\D/g, ""), 10);
};
export const currencyFormat = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ugx";
};

export function shortenText(text: string, maxLength: number = 50): string {
  return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
}

export function sortNotificationsByStatus(
  notifications: Notification[],
  preference: string
): Notification[] {
  return notifications.sort((a, b) => {
    if (preference === "unread" || preference == "recent") {
      if (a.status === "unread" && b.status === "read") {
        return -1;
      } else if (a.status === "read" && b.status === "unread") {
        return 1;
      }
    } else if (preference === "read") {
      if (a.status === "read" && b.status === "unread") {
        return -1;
      } else if (a.status === "unread" && b.status === "read") {
        return 1;
      }
    }
    return 0;
  });
}
export default usePasswordToggle;
