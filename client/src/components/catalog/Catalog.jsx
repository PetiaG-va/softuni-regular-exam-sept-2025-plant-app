export default function Catalog() {
    return (
        <div id="catalog-page" className="page">
            <div className="catalog-header">
                <h2 id="catalog-title">Всички растения</h2>
                <button className="btn" id="add-plant-btn">+ Добави растение</button>
            </div>

            <div className="cards-grid" id="catalog-plants">
                <img src="" alt="" />
                <p className="title"></p>
                <p className=""></p>
            </div>

            <div className="empty-state" id="empty-catalog">
                <div className="empty-state-icon">🌱</div>
                <h3>Все още няма растения</h3>
                <p>Добави първото си растение в колекцията</p>
                <button className="btn" id="add-first-btn">Добави растение</button>
            </div>
        </div>
    );
}
