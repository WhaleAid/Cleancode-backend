const express = require("express");
const cors = require('cors');
require("dotenv").config();

// Import routes
const swaggerRoutes = require("./app/routes/swagger.routes.js");
const userRoutes = require("./app/routes/user.routes.js");
const cardRoutes = require("./app/routes/card.routes.js");

const app = express();
app.use(cors());
app.use(express.json());

// Call routes
swaggerRoutes(app);
userRoutes(app);
cardRoutes(app);

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to the Leitner System API! Use our endpoints to manage cards, users, and quizzes for an enhanced learning experience. Check /api-docs for API documentation."
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});