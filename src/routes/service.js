import Navbar from "../componment/navbar";
import Hero from "../componment/hero";
import Night from "../assets/service.jpg"
import Footer from "../componment/footer";
import Trip from "../componment/trip";
function Service(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid" heroImg={Night} title="Service"/>
        <Trip/>
        <Footer/>
        </>
    );
}
export default Service