const express = require('express');
const mongoose = require("mongoose");
const app = express();

// Configuración de vistas
app.set('view engine', 'ejs');
app.set('views', './views');


// Conectar a MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://erikcodedeveloper:123abc321i9I2@tetstingfirst.psd642b.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conexión a MongoDB Atlas exitosa");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB Atlas:", err);
  });



// Controladores
const mainController = require('./controllers/mainController');
const productController = new mainController();
// Rutas
/*app.get("/", mainController.index);
app.get("/help", mainController.help);*/
// Ejemplo de uso de los métodos del controlador
app.get('/products', productController.getAllProducts);
app.get('/products/:id', productController.getProductById);
app.post('/products', productController.createProduct);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);


// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
