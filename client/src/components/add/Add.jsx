export default function Add() {
    return (
        <div id="add-page" className="page">
            <div className="form-container">
                <h2>Add plant</h2>
                <form id="add-form">
                    <div className="form-group">
                        <label htmlFor="add-name">Name</label>
                        <input type="text" id="add-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-type">Scientific</label>
                        <input type="text" id="add-type" placeholder="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-light">Light</label>
                        <select id="add-light" required>
                            <option value="">Choice...</option>
                            <option value="irect sunlight">Direct sunlight</option>
                            <option value="Bright indirect light">Bright indirect light</option>
                            <option value="Medium light">Medium light</option>
                            <option value="Low light">Low light</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-water">Water</label>
                        <select id="add-water" required>
                            <option value="">Choice...</option>
                            <option value="Frequently (2-3 times a week)">Frequently (2-3 times a week)</option>
                            <option value="Moderate (once a week)">Moderate (once a week)</option>
                            <option value="Rarely (every 2 weeks)">Rarely (every 2 weeks)</option>
                            <option value="Very rarely (monthly)">Very rarely (monthly)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-description">Description</label>
                        <textarea id="add-description" required></textarea>
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