const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

app.use(express.json());

const swaggerOptions = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Todo List API",
            version:"1.0.0",
            description: "A simple CRUD API for managing tasks",
        },
    },
    apis:["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", require("./routes/taskroutes"));

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found, access denied"
    });
});