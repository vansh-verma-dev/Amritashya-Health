import Headline from "../Components/headline";
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
       <Headline/>
       <WhyChooseUs/>
       <FAQ/>
       <Footer/>
        </>
    )
}
export default Home;