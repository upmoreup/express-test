const express = require("express");
const app = express();

const routes = require("./api");

app.use(express.json());
app.use("/", routes);

const port = 5000;

app.listen(port, function () {
    console.log(`listening on ${port}`)
});