import { Link } from "react-router";

export default function PlantCard({
    id,
    name,
    scientific,
    water,
    light,
    abstract,
    imageUrl,

}) {
    return (
        <div className="plant-card">
            <img src={imageUrl} alt={name} />
            <div className="details">
                <h3 className="name">{name}</h3>
                <p className="scientific">{scientific}</p>
                <p className="water">{water}</p>
                <p className="light">{light}</p>
                <p className="abstract">{abstract}</p>
                <Link to={`/catalog/${id}/details`} className="details-btn">Details</Link>
            </div>
        </div>
    )
}