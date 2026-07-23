import Navbar from "../Components/Navbar"
import FAQ from "../pages/Faq"
import Footer from "../pages/Footer"
import Products from "../pages/products"

function ProductHome(){
    return(
        <>
        <Navbar/>
        <Products/>
        <FAQ/>
        <Footer/>
        </>
    )
}
export default ProductHome;