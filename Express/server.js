import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";
import cors from "cors";
const PORT = 8000;

const app = express();

app.use(cors());  // allows cross origin resource sharing with all
app.use('/api', apiRouter);

app.use((req, res) => {
    // if there is not valid endpoint
    res.status(404).json({message: "Endpoint not found"});
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));