const connection = require('../drivers/connect-db');

module.exports = {

    getProducts: (req, res) => {
      const query = 'SELECT * FROM zapatos';
  
      connection.query(query, (err, results) => {
        if (err) {
          console.error('Error al obtener las personas:', err);
          res.status(500).send('Error al obtener las personas');
          return;
        }
  
        res.render('index.ejs', { data: results });
      });
    }

  };