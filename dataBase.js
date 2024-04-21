const mongoose = require("mongoose");

// Conectar a MongoDB Atlas
mongoose
  .connect("URI_HERE", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión a MongoDB Atlas exitosa");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB Atlas:", err);
  });
