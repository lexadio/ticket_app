import React from 'react';

function filterTransfer() {
    return (
        <div className="section-transfer filter">
        <h2 className="transfer-h2">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
        <ul className="filter-ul">
            <li className="transfer-li">
                <label className="transfer-label">
                    <input className="transfer-input" type="checkbox" /><span className="transfer-span">Без пересадок</span>
                </label>
            </li>
            <li className="transfer-li">
                <label className="transfer-label">
                    <input className="transfer-input" type="checkbox" /><span className="transfer-span">1 пересадка</span>
                </label>
            </li>
            <li className="transfer-li">
                <label className="transfer-label">
                    <input className="transfer-input" type="checkbox" /><span className="transfer-span">2 пересадки</span>
                </label>
            </li>
            <li className="transfer-li">
                <label className="transfer-label">
                    <input className="transfer-input" type="checkbox" /><span className="transfer-span">3 пересадки</span>
                </label>
            </li>
        </ul>
    </div>
    )
};

export default filterTransfer;