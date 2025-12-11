
import React, { useEffect, useState } from "react";

function Konyvek() {
  const [konyvek, setKonyvek] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/konyvek")
      .then((res) => res.json())
      .then((data) => setKonyvek(data))
      .catch((err) => console.error("Hiba:", err));
  }, []);

  return (
    <div>
      <h2>Könyvek listája</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cím</th>
            <th>Szerző</th>
            <th>Műfaj ID</th>
          </tr>
        </thead>
        <tbody>
          {konyvek.map((konyv) => (
            <tr key={konyv.konyv_id}>
              <td>{konyv.konyv_id}</td>
              <td>{konyv.cim}</td>
              <td>{konyv.szerzo}</td>
              <td>{konyv.mufaj_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Konyvek;
