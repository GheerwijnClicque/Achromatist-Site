const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('achromatist-site.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to The Achromatist database.');
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/photos', (req, res) => {
  db.serialize(() => {
    db.each(`SELECT * FROM photos`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      res.send(JSON.stringify(row));
    });
  });
});

router.post('/photos/add', (req, res) => {

});

module.exports = router;

/*
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

 */