import Navbar from "../Components/Navbar";
import FAQ from "./Faq";
import Footer from "./Footer";
import Hero from "./hero";
import WhyChooseUs from "./whychooes";
 

function Home(){
    return(
        <>
       <Navbar/>
       <Hero/>
       <WhyChooseUs/>
       <FAQ/>
       <Footer/>
        </>
    )
}
export default Home;