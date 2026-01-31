import express from "express";
import { productsRouter } from "./routes/products.js";

const PORT = 8000;

const app = express();

// using custom middleware
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
})

app.use(express.static('public'));  // using biult-in middleware to serve static files

app.use('/api/products', productsRouter);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));