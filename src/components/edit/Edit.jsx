export default function Edit() {
    return (
        <div id="edit-page" className="page">
        <div className="form-container">
            <h2>Редактирай растение</h2>
            <form id="edit-form">
                <div className="form-group">
                    <label htmlFor="edit-name">Име на растението</label> 
                    <input type="text" id="edit-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="edit-type">Тип</label> 
                    <input type="text" id="edit-type" required />
                </div>
                <div className="form-group">
                    <label htmlFor="edit-icon">Икона (emoji)</label> 
                    <input type="text" id="edit-icon" maxLength="2" required />
                </div>
                <div className="form-group">
                    <label htmlFor="edit-light">Светлина</label> 
                    <select id="edit-light" required >
                        <option value="Пряка слънчева светлина">Пряка слънчева светлина</option>
                        <option value="Ярка непряка светлина">Ярка непряка светлина</option>
                        <option value="Средна светлина">Средна светлина</option>
                        <option value="Ниска светлина">Ниска светлина</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="edit-water">Поливане</label> 
                    <select id="edit-water" required>
                        <option value="Често (2-3 пъти седмично)">Често (2-3 пъти седмично)</option>
                        <option value="Умерено (веднъж седмично)">Умерено (веднъж седмично)</option>
                        <option value="Рядко (на 2 седмици)">Рядко (на 2 седмици)</option>
                        <option value="Много рядко (месечно)">Много рядко (месечно)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="edit-description">Описание</label> 
                    <textarea id="edit-description" required></textarea>
                </div>
                <div className="form-actions">
                    <button type="button" className="btn btn-secondary" id="cancel-edit-btn">Отказ</button> 
                    <button type="submit" className="btn">Запази</button>
                </div>
            </form>
        </div>
    </div>
    )
}