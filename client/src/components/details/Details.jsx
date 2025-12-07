import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export default function Details() {
    const navigate = useNavigate();
    const { plantId } = useParams();
    const [plant, setPlant] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/plants/${plantId}`)
            .then(response => response.json())
            .then(result => setPlant(result))
            .catch(err => alert(err.message))
    }, [plantId]);

    const deletePlantHandler = async () => {
        const isConfirmed = confirm(`Do you want to delete this plant ${plant.title}`);

        if (!isConfirmed) {
            return;
        }

        try {
            await fetch(`http://localhost:4000/plants/${plantId}`, {
                method: 'DELETE'
            });

            navigate('/plants');

        } catch (error) {
            alert('Unable to delete plant', error.message);
        }
    }

    return (
        <div id="details-page" className="page">
            <div className="details-container">
                <div className="details-header">
                    <div className="details-icon" id="details-icon"></div>
                    <h2 id="details-name">{plant.title}</h2>
                    <div className="details-type" id="details-type">{plant.scientific}</div>
                </div>
                <div className="details-content">
                    <div className="details-row">
                        

                        <div className="details-info-grid">
                            <div className="info-item">
                                <strong>☀️ Light</strong>
                                <span id="details-light">{plant.light}</span>
                            </div>
                            <div className="info-item">
                                <strong>💧 Water</strong>
                                <span id="details-water">{plant.water}</span>
                            </div>
                        </div>
                    </div>

                    <p className="details-description" id="details-description">{plant.description}</p>
                    
                    <div className="details-actions">
                        <button className="btn" data-nav="catalog">← Back</button>
                        <button
                            className="btn btn-secondary"
                            id="edit-details-btn"
                            style={{ display: "block" }}
                        >
                            ✏️ Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            id="delete-details-btn"
                            style={{ display: "block" }}
                            onClick={deletePlantHandler}
                        >
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
