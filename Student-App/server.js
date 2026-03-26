const express = require("express");
const StudentRoutes = require("./routes/studentRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();


app.use(express.json());
app.use(logger);

app.use("/students", StudentRoutes);

app.get("/", (req, res) => {
  res.send("Student MVC API is Running...");
});


app.use(errorHandler);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});