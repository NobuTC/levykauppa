const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("allAlbums.db");

const category = ["Rock", "Pop", "Metal", "Disco"];

// Check if the "CD" table exists, and create it if it doesn't
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS CD (
    id INTEGER PRIMARY KEY,
    title TEXT,
    price REAL,
    category TEXT,
    image_url TEXT,
    release_date DATE,
    info TEXT,
    artist_name TEXT
  )`);
});

// Define a route handler for the /api/product endpoint
router.get("/:id", (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM CD WHERE id = ?";

  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      return res.status(404).json({ message: "CD not found" });
    }

    res.json({ data: row });
  });
});

router.post("/add", (req, res) => {
  const { title, price, category, image_url, release_date, info, artist_name } =
    req.body;

  // SQL query to insert data into the CD table
  const sql = `
    INSERT INTO CD (title, price, category, image_url, release_date, info, artist_name)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  // Execute the query with the provided data
  db.run(
    sql,
    [
      title,
      parseFloat(price),
      category,
      image_url,
      new Date(release_date),
      info,
      artist_name,
    ],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        message: "CD data inserted successfully",
        data: {
          id: this.lastID, // Retrieve the auto-generated id
          title,
          price,
          category,
          image_url,
          release_date,
          info,
          artist_name,
        },
      });
    }
  );
});

module.exports = router;
