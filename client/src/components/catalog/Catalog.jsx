import { useEffect, useState } from "react"
import PlantCard from "../plantCard/PlantCard.jsx";

export default function Catalog() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/plants`)
            .then(response => response.json())
            .then(result => setPlants(result))
            .catch(error => alert(error.message))
    }, [])
    return (
        <main>
            <h1>Catalog</h1>

            <div className="catalog-grid">
                {plants.map(plant => <PlantCard key={plant.id} {...plant} />)}
            </div>

        </main>
    )
}