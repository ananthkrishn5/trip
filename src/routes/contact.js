import Navbar from "../componment/navbar";
import Hero from "../componment/hero";
import Contactimg from "../assets/10.jpg"
import Footer from "../componment/footer";
import Contactform from "../componment/contactform"
function Contact(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid" heroImg={Contactimg} title="ContactUs"/>
        <Contactform/>
        <Footer/>
        </>
    );
}
export default Contact