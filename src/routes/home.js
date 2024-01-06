import Hero from "../componment/hero.js";
import Navbar from "../componment/navbar.js";
import Jeep from "../assets/12.jpg";
import Destination from "../componment/destination.js"
import Trip from "../componment/trip.js";
import Footer from "../componment/footer.js";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero" heroImg={Jeep} title="Your Journey Your Story" text="Choose Your Favourite Destination." buttonText="Travel Plan" url="/service" btnClass="show"/>
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );
}
export default Home