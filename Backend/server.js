const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: '',
    database: 'konyvtar'
});

db.connect((err) => {
    if (err) {
        console.error('Error az adatbázis kapcsolódásakor:', err);
        return;
    }
    console.log('kapcs jó.');
});

app.get('/konyvek', (req, res) => {
    const sqlSelect = "SELECT * FROM konyv";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.error('Hiba a lekérdezés során:', err);
            res.status(500).send('Hiba a lekérdezés során');
        } else {
            res.json(results);
        }
    });
});



app.post("/ujkonyv", (req, res) => {
    const { cim, szerzo, mufaj_id } = req.body;
    const sql = "INSERT INTO konyv (cim, szerzo, mufaj_id) VALUES (?, ?, ?)";
    db.query(sql, [cim, szerzo, mufaj_id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Hiba a beszúrás során" });
      }
      res.json({ message: "Könyv hozzáadva", insertedId: result.insertId });
    });
  });
  

app.delete('/konyvtorles/:id', (req, res) => {
    const id  = req.params.id;
    const sqlDelete = "DELETE FROM konyv WHERE konyv_id = ?";
    db.query(sqlDelete, [id], (err, result) => {
        if (err) {
            console.error('Hiba a törlés során:', err);
            res.status(500).send('Hiba a törlés során');
        } else {
            res.send('Könyv törölve');
        }
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

