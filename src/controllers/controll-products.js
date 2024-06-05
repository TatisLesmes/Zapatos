const connection = require('../drivers/connect-db');

module.exports = {
  getProducts: (req, res) => {
    const query = 'SELECT * FROM Tienda.zapatos';

    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener los productos:', err);
        res.status(500).send('Error al obtener los productos');
        return;
      }

      console.log('Results:', results); // Imprime los resultados en la consola

      res.render('tables.ejs', { data: results });
    });
  },


  createProducts: (req, res) => {
    const { ID, Brand, Model, Color, Size, Price} = req.body; // Asegúrate de que estos nombres coincidan con los campos de tu formulario

    const query = 'INSERT INTO Tienda.zapatos (ID, Brand, Model, Color, Size, Price) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [ID, Brand, Model, Color, Size, Price];

    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error al agregar el producto:', err);
        res.status(500).send('Error al agregar el producto');
        return;
      }

      console.log('Producto agregado:', result);

      res.redirect('/tables'); // Redirige a la página de productos después de agregar uno nuevo
    })
  }
};
