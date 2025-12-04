export default function Edit() {
    return (
        <div id="edit-page" className="page">
        <div className="form-container">
            <h2>Edit plant</h2>
            <form id="edit-form">
                <div className="form-group">
                    <label htmlFor="edit-name">Name</label> 
                    <input type="text" id="edit-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="edit-type">Scientific</label> 
                    <input type="text" id="edit-type" required />
                </div>
                <div className="form-group">
                    <label htmlFor="edit-light">Light</label> 
                    <select id="edit-light" required >
                        <option value="irect sunlight">Direct sunlight</option>
                        <option value="Bright indirect light">Bright indirect light</option>
                        <option value="Medium light">Medium light</option>
                        <option value="Low light">Low light</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="edit-water">Water</label> 
                    <select id="edit-water" required>
                        <option value="Frequently (2-3 times a week)">Frequently (2-3 times a week)</option>
                        <option value="Moderate (once a week)">Moderate (once a week)</option>
                        <option value="Rarely (every 2 weeks)">Rarely (every 2 weeks)</option>
                        <option value="Very rarely (monthly)">Very rarely (monthly)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="edit-description">Description</label> 
                    <textarea id="edit-description" required></textarea>
                </div>
                <div className="form-actions">
                    <button type="button" className="btn btn-secondary" id="cancel-edit-btn">Cancel</button> 
                    <button type="submit" className="btn">Edit</button>
                </div>
            </form>
        </div>
    </div>
    )
}