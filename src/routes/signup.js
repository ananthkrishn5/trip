import Navbar from "../componment/navbar";
import Hero from "../componment/hero";
import Night from "../assets/pl.jpg"
import Footer from "../componment/footer";
import SignUp from "../componment/signupp";
function Signup(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid" heroImg={Night}/>
        <SignUp/>
        <Footer/>
        </>
    );
}
export default Signup