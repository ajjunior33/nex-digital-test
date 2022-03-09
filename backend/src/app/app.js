require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/v1", routes);
app.all("*", (request, response) => {
  return response.status(404).json({
    message: "Rota não encontrada",
    status: false,
  });
});
app.use((error, request, response, next) => {
  if (error) {
    if (error.message) {
      return response.status(400).json({
        message: error.message,
        status: false,
      });
    }
    return response.status(500).send(err);
  }
  next();
});
module.exports = app;
