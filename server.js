const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const routes = require("./api/routes");

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes in your Express app
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
