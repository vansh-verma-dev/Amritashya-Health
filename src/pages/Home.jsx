import Headline from "../Components/headline";
import Navbar from "../Components/Navbar";
import FAQ from "./Faq";
import Footer from "./Footer";
import Hero from "./hero";
import Products from "./products";
import WhyChooseUs from "./whychooes";
 

function Home(){
    return(
        <>
       <Navbar/>
       <Hero/>
       <Headline/>
       <Products/>
       <WhyChooseUs/>
       <FAQ/>
       <Footer/>
        </>
    )
}
export default Home;