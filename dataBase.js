const mongoose = require("mongoose");

// Conectar a MongoDB Atlas
mongoose
  .connect("mongodb+srv://web-user:web-user123@cluster0.ahdifdo.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión a MongoDB Atlas exitosa");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB Atlas:", err);
  });
