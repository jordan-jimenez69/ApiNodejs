import express from "express";
import carsRoutes from "./routes/cars.js"

const app = express();

const PORT = process.env.PORT || 3001;

//MidleWare

app.use(express.json());
app.use("/cars", carsRoutes);

//Routes
app.get("/", (req, res) => {
    res.json({message: "Hello"});
});

app.listen(PORT, ()=> {
    console.log('running 3001');
})

