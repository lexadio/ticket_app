import React from 'react';

function aviaFilter() {
    return (
        <div className="section-avia_filter">
        <ul className="section-avia-ul">
            <li className="section-avia-li">
                <button className="section-avia-button" href="#">Самый дешевый</button>
            </li>
            <li className="section-avia-li">
                <button className="section-avia-button" href="#">Самый быстрый</button>
            </li>
            <li className="section-avia-li">
                <button className="section-avia-button" href="#">Оптимальный</button>
            </li>
        </ul>
    </div>
    )
};

export default aviaFilter;