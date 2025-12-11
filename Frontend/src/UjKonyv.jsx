import React, { useState } from "react";



function UjKonyv() {
  const [cim, setCim] = useState("");
  const [szerzo, setSzerzo] = useState("");
  const [mufaj_id, setMufajId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/ujkonyv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cim, szerzo, mufaj_id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Siker:", data);
        setCim("");
        setSzerzo("");
        setMufajId("");
      })
      .catch((err) => console.error("Hiba:", err));
  };

  return (
    <div>
      <h2>Új könyv hozzáadása</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cím"
          value={cim}
          onChange={(e) => setCim(e.target.value)}
        />
        <input
          type="text"
          placeholder="Szerző"
          value={szerzo}
          onChange={(e) => setSzerzo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Műfaj ID"
          value={mufaj_id}
          onChange={(e) => setMufajId(e.target.value)}
        />
        
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
}

export default UjKonyv;
