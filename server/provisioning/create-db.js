const PhotoData = require('./default-data');
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('achromatist-site.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  db.serialize(() => {
    db.run('DROP TABLE IF EXISTS photos');

    console.log('Creating Table');
    db.run('CREATE TABLE `photos` ( `id` INTEGER PRIMARY KEY AUTOINCREMENT, `caption` TEXT, `camera` TEXT, `lens` TEXT, `film` TEXT, `format` TEXT )');
    console.log('Created Table');
    console.log('filling data');

    let stmt = db.prepare("INSERT INTO photos VALUES (?, ?, ?, ?, ?, ?)");

    PhotoData.forEach((photo) => {
      stmt.run(undefined, photo.caption, photo.camera, photo.lens, photo.film, photo.format);
    });

    stmt.finalize();
    console.log('filled data');
  });

});
