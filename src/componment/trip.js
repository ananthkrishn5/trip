import "./trip.css";
import Tripdata from "./tripdata";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/6.jpg"
import Trip3 from "../assets/8.jpg"
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
                <p>You can discover unique destination using google maps</p>
            <div className="tripcard"><Tripdata image={Trip1} heading="Trip in Indonesia" text="Feel the wind in your hair and do as the locals do by hiring a motorbike to explore this beautiful part of the world. If you’re on Samosir Island, take the day to explore by taking a drive on the road running around the edge of the island. Although rough and unpaved in places, this road offers some spectacular views of the lake from the highest points on the island. If you’re staying in the popular village of Tuk Tuk on Samosir, the best way to get around is to walk or wander, down the main street at a leisurely pace."/>
            <Tripdata image={Trip2} heading="Trip in Malaysia" text="Malaysia is a wonderful vacation destination for tourists from all across the world. There are several exotic islands, pristine beaches, picturesque towns and adventure spots. If you are planning to visit Malaysia, then you should be aware of what Malaysia is famous for so that you can make an informed bucket list."/>
            <Tripdata image={Trip3} heading="Trip in France" text="France has been a tourist hotspot for many decades now and continues to remain a top tourist destination even today. It's not hard to imagine why that is; the country has more or less everything to offer the millions of tourists that flock to the country each year. It has many century-old monuments that are a testimony to its rich and historic past. It has beautiful mountain."/></div>
        </div>
    );
}
export default Trip