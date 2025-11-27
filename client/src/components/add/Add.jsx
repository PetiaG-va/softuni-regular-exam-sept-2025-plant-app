export default function Add() {
    return (
        <div id="add-page" className="page">
            <div className="form-container">
                <h2>Добави растение</h2>
                <form id="add-form">
                    <div className="form-group">
                        <label htmlFor="add-name">Име на растението</label>
                        <input type="text" id="add-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-type">Тип</label>
                        <input type="text" id="add-type" placeholder="напр. Кактус, Цвете, Билка" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-icon">Икона (emoji)</label>
                        <input type="text" id="add-icon" placeholder="🌵" maxLength="2" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-light">Светлина</label>
                        <select id="add-light" required>
                            <option value="">Избери...</option>
                            <option value="Пряка слънчева светлина">Пряка слънчева светлина</option>
                            <option value="Ярка непряка светлина">Ярка непряка светлина</option>
                            <option value="Средна светлина">Средна светлина</option>
                            <option value="Ниска светлина">Ниска светлина</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-water">Поливане</label>
                        <select id="add-water" required>
                            <option value="">Избери...</option>
                            <option value="Често (2-3 пъти седмично)">Често (2-3 пъти седмично)</option>
                            <option value="Умерено (веднъж седмично)">Умерено (веднъж седмично)</option>
                            <option value="Рядко (на 2 седмици)">Рядко (на 2 седмици)</option>
                            <option value="Много рядко (месечно)">Много рядко (месечно)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-description">Описание</label>
                        <textarea id="add-description" required></textarea>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" data-nav="catalog">Отказ</button>
                        <button type="submit" className="btn">Добави</button>
                    </div>
                </form>
            </div>
        </div>
    )
}