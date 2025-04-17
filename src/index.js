const express = require("express");
const { serverConfig } = require("./config");
const apiRoutes = require("./routes/index");
const app = express();

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Server Started on ${process.env.PORT}`);
});
