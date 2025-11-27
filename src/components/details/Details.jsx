export default function Details() {
    return (
        <div id="details-page" className="page">
            <div className="details-container">
                <div className="details-header">
                    <div className="details-icon" id="details-icon"></div>
                </div>
                <div className="details-content">
                    <h2 id="details-name"></h2>
                    <div className="details-type" id="details-type"></div>
                    <p className="details-description" id="details-description"></p>
                    <div className="details-info-grid">
                        <div className="info-item">
                            <strong>☀️ Светлина</strong> 
                            <span id="details-light"></span>
                        </div>
                        <div className="info-item">
                            <strong>💧 Поливане</strong> 
                            <span id="details-water"></span>
                        </div>
                    </div>
                    <div className="details-actions">
                        <button className="btn" data-nav="catalog">← Назад</button>
                        <button
                            className="btn btn-secondary"
                            id="edit-details-btn"
                            style={{ display: "none" }}
                        >
                            ✏️ Редактирай
                        </button>
                        <button
                            className="btn btn-danger"
                            id="delete-details-btn"
                            style={{ display: "none" }}
                        >
                            🗑️ Изтрий
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
