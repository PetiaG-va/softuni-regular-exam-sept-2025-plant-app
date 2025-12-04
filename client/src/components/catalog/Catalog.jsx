import { useEffect, useState } from "react";
import PlantCard from "../plantCard/PlantCard.jsx";

export default function Catalog() {
    const [allPlants, setAllPlants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/plants')
            .then(response => response.json())
            .then(result => setAllPlants(result))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div id="catalog-page" className="page">
            <div className="catalog-header">
                <h2 id="catalog-title">Всички растения</h2>
                <button className="btn" id="add-plant-btn">+ Добави растение</button>
            </div>

            <div className="cards-grid" id="catalog-plants">
                {allPlants.map(plant => <PlantCard key={plant.id} {...plant} />)}
            </div>

            {/* <div className="empty-state" id="empty-catalog">
                <div className="empty-state-icon">🌱</div>
                <h3>Все още няма растения</h3>
                <p>Добави първото си растение в колекцията</p>
                <button className="btn" id="add-first-btn">Добави растение</button>
            </div> */}
        </div>
    );
}
