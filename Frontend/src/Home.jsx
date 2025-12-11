import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <h1>Üdvözöljük a Könyvtár alkalmazásban!</h1>
            <p>Használja a navigációs sávot a könyvek megtekintéséhez vagy új könyv hozzáadásához.</p>
            <Link to="/konyvek">Ugrás a Könyvek oldalra</Link>
        </div>
    );

}
export default Home;