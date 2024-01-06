import Navbar from "../componment/navbar";
import Hero from "../componment/hero";
import Night from "../assets/night.jpg"
import Footer from "../componment/footer";
import Aboutus from "../componment/aboutus";
function About(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid" heroImg={Night} title="About"/>
        <Aboutus/>
        <Footer/>
        </>
    );
}
export default About