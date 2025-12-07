import { useNavigate } from "react-router";

export default function Add() {
    const navigate = useNavigate();

    const addNewPlantHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        await fetch(`http://localhost:4000/plants`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        navigate('/plants');

    }

    return (
        <div id="add-page" className="page">
            <div className="form-container">
                <h2>Add plant</h2>
                <form id="add-form" onSubmit={addNewPlantHandler}>
                    <div className="form-group">
                        <label htmlFor="add-name">Name</label>
                        <input type="text" id="add-name" name="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-type">Scientific</label>
                        <input type="text" id="add-type" name="scientific" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-image">Image</label>
                        <input type="text" id="add-image" name="imageUrl" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-light">Light</label>
                        <select id="add-light" name="light" required>
                            <option value="">Choice...</option>
                            <option value="irect sunlight">Direct sunlight</option>
                            <option value="Bright indirect light">Bright indirect light</option>
                            <option value="Medium light">Medium light</option>
                            <option value="Low light">Low light</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-water">Water</label>
                        <select id="add-water" name="water" required>
                            <option value="">Choice...</option>
                            <option value="Frequently (2-3 times a week)">Frequently (2-3 times a week)</option>
                            <option value="Moderate (once a week)">Moderate (once a week)</option>
                            <option value="Rarely (every 2 weeks)">Rarely (every 2 weeks)</option>
                            <option value="Very rarely (monthly)">Very rarely (monthly)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-description">Description</label>
                        <textarea id="add-description" name="description" required></textarea>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" data-nav="catalog">Cancel</button>
                        <button type="submit" className="btn">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}