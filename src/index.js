import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

//Routes
app.get("/", (req, res) => {
    res.send("Hello");
}) 

app.listen(PORT, ()=> {
    console.log('running 3001');
}) 