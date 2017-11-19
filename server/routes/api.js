const express = require('express');
const router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: './src/assets/gallery' })
var fs = require('fs');

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
    let rows = [];
    db.each(`SELECT * FROM photos`, (err, row) => {
      if (err) {
        res.error(err);
      }
      rows.push(row);
    }, (err, count) => {
      if (err) {
        res.error(err);
      }
      res.send(JSON.stringify(rows));
    });
  });
});

router.post('/photos', upload.single('image'), (req, res) => {
  if (!req.file)
    return res.status(400).send('No files were uploaded.');

  fs.readFile(req.file.path, function (err, data) {
    fs.writeFile('./src/assets/gallery/copy-' + req.file.originalname, data, function (err) {
      if (err) {
        response = {
          message: 'Sorry, file couldn\'t be uploaded.',
          filename: req.file.originalname
        };
      } else {
        fs.unlink(req.file.path, (error) => {
          if (err)
            return console.log(err);
        });
        response = {
          message: 'File uploaded successfully',
          filename: req.file.originalname
        };
      }
      res.end( JSON.stringify( response ) );
    });
  });
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
