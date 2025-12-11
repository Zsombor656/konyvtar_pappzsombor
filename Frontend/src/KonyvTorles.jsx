import React from "react";
import { Link } from "react-router-dom";
import './index.css';

function KonyvTorles() {
    return (
        <div>
            <h2>Könyv Törlése</h2>
            <p>Itt törölheti a könyvet az adatbázisból.</p>
            <Link to="/konyvek">Vissza a Könyvek oldalra</Link>
        </div>
    );
}
export default KonyvTorles;