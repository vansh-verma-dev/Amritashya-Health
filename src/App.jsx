import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./Components/Notefounf";
import AboutAmritashya from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import ProductView from "./Product/productView";
import Account from "./Account/Account";
import MyCart from "./CartPage/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<AboutAmritashya />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/ProductView" element={<ProductView/>}/>
        <Route path="/MyCart" element={<MyCart/>}/>
        <Route path="/Createaccount" element={<Account/>}/>

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  )
}
export default App;