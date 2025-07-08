// console.log("I am in express project")
const express = require("express");
const connectDb=require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

const dotenv=require ("dotenv").config();  //?loads environment varaiables form .env

connectDb();
const app=express();

const port =process.env.PORT || 5000;  //?gets port number from .env ...if not by default take 5000

app.use(express.json());  //?help us provide a parser to parse the datasetream which we recieve from client on server side
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on port ${port}`);

});
