import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
 import Mountain3 from "../assets/10.jpg"
 import Mountain4 from "../assets/4.jpg"
import "./destination.css"
import Destinantiondata from "./destinationdata";

const Destinantion =  ()=>{
return(
    <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give yu lots of oportunity to roam around</p>
        <Destinantiondata className ="first-des"
        heading="Taal Valcano batangas" text="Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. Since the 1977 eruption, the volcano had shown signs of unrest since 1991, with strong seismic activity and ground fracturing events as well as the formation of small mud pots and mud geysers on parts of the island.Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines.The main Vulcan point situated in the main crater lake, which is on the volcano island that is in Taal lake, which is in the main island of the Philippines (Luzon)."
        img1={Mountain1}
        img2={Mountain2}/>

        <Destinantiondata className ="first-des-reverse"
        heading="Mt. Daguldul, Batangas" text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.
        The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. According to locals, the mountain was named as such because it describes the magnificence of the mountain range and the blunt rolling of its slopes. Mt. Daguldol has a total trail length of nine kilometers. 
        Although Mt. Daguldol is not as popular as the other mountain in Batangas such as Mt. Maculot and Mt. Batulao. However, it’s one of a kind mountain where hikers can be able to experience a diversity of landscapes. Mt. Daguldol has three different trails. First is the trail where one can see the beach or seaside. The second is the trail that passes by woodlands and forests. The third is the grassland trail at the top of the mountain where one can see the mountain ranges and coastal view of Batangas."
        img1={Mountain3}
        img2={Mountain4}/>
       
    </div>
);
}
export default Destinantion;