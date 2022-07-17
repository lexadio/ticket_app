import React from 'react';

function filterCompany() {
    return (
        <div className="section-company filter">
                    <h2 className="company-h2">КОМПАНИЯ</h2>
                    <ul className="company-ul filter-ul">
                        <li className="company-li">
                            <label className="company-label">
                                <input className="company-input" type="radio" name="avia" />
                                    <span className="company-span">Все</span>
                            </label>
                        </li>
                        <li className="company-li">
                            <label className="company-label">
                                <input className="company-input" type="radio" name="avia" />
                                    <span className="company-span">S7 Airlines</span>
                            </label>
                        </li>
                        <li className="company-li">
                            <label className="company-label">
                                <input className="company-input" type="radio" name="avia" />
                                    <span className="company-span">XiamenAir</span>
                            </label>
                        </li>
                    </ul>
                </div>
    )
};

export default filterCompany;