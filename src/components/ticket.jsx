import React from 'react';
import logoS7 from '../assets/img/S7-Logo.png';

function Ticket() {
    return (
        <div>
        <ul className="tikets-ul">
        <li className="tikets-li">
            <div className="tikets">

                <div className="tikets-info">
                    <span className="tikets-price">13400 Р</span>
                    <div className="tikets-logo tikets-logo_s7">
                        <img src={logoS7} alt="Logo S7"/>
                    </div>
                </div>

                <div className="tikets-description">

                    <div>
                        <span className="tikets-place">MOW – HKT</span>
                        <span className="ешлуеы-departure">10:45 – 08:00</span>
                    </div>

                    <div className="tikets-anotation">
                        <span className="tikets-way">В пути</span>
                        <span className="tikets-time">21ч 15м</span>
                    </div>

                    <div className="transfer">
                        <span className="transfer-discription">Без пересадок</span>
                    </div>

                </div>
            </div>
        </li>
        </ul>
        </div>
    )
};

export default Ticket;