import React from "react";

function Konyvek({ konyvek, onKonyvTorles }) {
    return (
        <div>
            <h2>Könyvek Listája</h2>
            <ul>
                {konyvek.map((konyv) => (
                    <li key={konyv.id}>
                        {konyv.cim} - {konyv.szerzo} ({konyv.ev})
                        <button onClick={() => onKonyvTorles(konyv.id)}>Törlés</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Konyvek;