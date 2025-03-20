import {Route, Routes} from "react-router-dom";
import Admin from "@/layouts/Admin.tsx";
import AdminHome from "@/pages/admin-pages/admin-home.tsx";
import Customers from "@/pages/admin-pages/customers.tsx";
import Orders from "@/pages/admin-pages/orders.tsx";
import Products from "@/pages/admin-pages/products.tsx";
import Profile from "@/pages/admin-pages/profile.tsx";
import Sales from "@/pages/admin-pages/sales.tsx";
import PageNotFound from '@/pages/page-not-found.tsx';
import Product from "@/pages/admin-pages/product.tsx";
import EditProduct from "@/pages/admin-pages/edit-product.tsx";
import AddNewProduct from "@/pages/admin-pages/add-new-product.tsx";
import SignUp from "@/pages/auth/sign-up.tsx";
import SignIn from "@/pages/auth/sign-in.tsx";
import UserLayout from "@/layouts/UserLayout.tsx";
import UserHome from "@/pages/user-pages/user-home.tsx";
import About from "@/pages/user-pages/about.tsx";
import Contact from "@/pages/user-pages/contact.tsx";
import Shop from "@/pages/user-pages/shop.tsx";
import UserProduct from "@/pages/user-pages/user-product.tsx";
import Cart from "@/pages/user-pages/cart.tsx";
import AddNewCustomer from "@/pages/admin-pages/add-new-customer.tsx";
import EditCustomer from "@/pages/admin-pages/edit-customer.tsx";
import CustomerDetails from "@/pages/admin-pages/customer-details.tsx";
import UserOrders from "@/pages/user-pages/orders.tsx";
import UserAccount from "@/pages/user-pages/account.tsx";
import UserOrderDetails from "@/pages/user-pages/order-details.tsx";
import Checkout from "@/pages/user-pages/checkout.tsx";
import Categories from "@/pages/admin-pages/categories.tsx";
import Brands from "@/pages/admin-pages/brands.tsx";
import AdminOrderDetails from "@/pages/admin-pages/admin-order-details.tsx";
import AdminEditOrder from "@/pages/admin-pages/admin-edit-order.tsx";
import NotificationPage from "@/pages/admin-pages/notification-page.tsx";
import NotificationsPage from "@/pages/admin-pages/notifications-page.tsx";
import ResetPassword from "@/pages/auth/reset-password.tsx";
import ResetToken from "@/pages/auth/reset-token.tsx";
import RequestOtp from "@/pages/auth/request-otp.tsx";

function App() {
  return (
    <>
     <Routes>
         <Route path={"/auth"} element={<UserLayout />}>
             <Route path={"signin"} element={<SignIn />}/>
             <Route path={"signup"} element={<SignUp />}/>
             <Route path={"password-reset"} element={<ResetPassword />}/>
             <Route path={"request-otp"} element={<RequestOtp />}/>
             <Route path={"enter-otp"} element={<ResetToken />}/>
         </Route>

         <Route path={"/"} element={<UserLayout />}>
            <Route index element={<UserHome />}/>
             <Route path={"about"} element={<About/>}/>
             <Route path={"shop"} element={<Shop/>}/>
             <Route path={"product/:productId"} element={<UserProduct />}/>
             <Route path={"contact"} element={<Contact />}/>
             <Route path={"cart"} element={<Cart/>}/>
             <Route path={"checkout"} element={<Checkout/>}/>
             <Route path={"orders"} element={<UserOrders/>}/>
             <Route path={"order-details/:orderId"} element={<UserOrderDetails />}/>
             <Route path={"my-account"} element={<UserAccount />}/>
         </Route>
         <Route path={"/admin"} element={<Admin />}>
             <Route index element={<AdminHome />}/>
             <Route path={"sales"} element={<Sales />}/>
             <Route path={"notifications"} element={<NotificationsPage />} />
             <Route path={"notification/:notificationId"} element={<NotificationPage />} />
             {/*Products*/}
             <Route path={"products"} element={<Products />}/>
             <Route path={"add-new-product"} element={<AddNewProduct />}/>
             <Route path={"product/:productId"} element={<Product />}/>
             <Route path={"edit-product/:productId"} element={<EditProduct />}/>
             {/*Customers*/}
             <Route path={"customers"} element={<Customers />}/>
             <Route path={"add-new-customer"} element={<AddNewCustomer />}/>
             <Route path={"customer/:customerId"} element={<CustomerDetails />}/>
             <Route path={"edit-customer/:customerId"} element={<EditCustomer />}/>
             {/**/}
             <Route path={"orders"} element={<Orders />}/>
             <Route path={"orders/:orderId"} element={<AdminOrderDetails />}/>
             <Route path={"orders/edit-order/:orderId"} element={<AdminEditOrder />}/>
             <Route path={"categories"} element={<Categories />}/>
             <Route path={"brands"} element={<Brands />}/>
             <Route path={"profile"} element={<Profile />}/>
         </Route>
         <Route path={"*"} element={<PageNotFound />}/>
     </Routes>
    </>
  )
}

export default App
