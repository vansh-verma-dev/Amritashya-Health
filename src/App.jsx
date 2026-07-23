import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./Components/Notefounf";
import AboutAmritashya from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import ProductView from "./Product/productView";
import Account from "./Account/Account";
import MyCart from "./CartPage/Cart";
import ProductBuy from "./Product/productBuy";
import Profile from "./Components/profile";
import Privacy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/terms";
import ShippingPolicy from "./pages/legal/shipping";
import ProductHome from "./Product/productHome";
import AdminPage from "./Admin/admin";
 import { CartProvider } from "./context/CartContext";

<CartProvider>
  <App />
</CartProvider>

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<AboutAmritashya />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/ProductHome" element={<ProductHome/>}/>
        <Route path="/ProductView/:id" element={<ProductView/>}/>
        <Route path="/MyCart" element={<MyCart/>}/>
        <Route path="/ProductBuy" element={<ProductBuy/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/shipping-policy" element={<ShippingPolicy/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/Createaccount" element={<Account/>}/> 
        <Route path="/AdminOrders" element={<AdminPage/>}/>
        {/* <Route path="/ShipmentCard" element={<ShipmentTracking/>}/> */}
        <Route path="*" element={<NotFound />} />
   
      </Routes>
    </>
  )
}
export default App;