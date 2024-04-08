import express from "express";
import villesRoutes from "./routes/villes.js"

const app = express();

const PORT = process.env.PORT || 3001;

//MidleWare
app.use(express.json());
app.use("/villes", villesRoutes)


//Routes
app.get("/", (req, res) => {
    res.json({message: "Hello"});
});

app.listen(PORT, ()=> {
    console.log('running 3001');
})

