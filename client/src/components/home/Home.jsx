import { useEffect, useState } from "react"
import PlantCard from "../plantCard/PlantCard.jsx";

export default function Home() {
    const [latestPlants, setLatestPlants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/plants')
            .then(response => response.json())
            .then(result => setLatestPlants(result))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div id="home-page">
            <div className="hero">
                <h1 id="home-title">Plant Care</h1>
                <p id="home-subtitle">Грижи за твоите зелени приятели</p>
            </div>
            <div className="cards-grid" id="home-plants">
                {latestPlants.map(plant => <PlantCard key={plant.id} {...plant}/>)}
            </div>
        </div>
    )
}