import express from "express";
import viewEngine from "./config/viewEngine.js";
import router from "./routes/web.js";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;
const host_name = process.env.HOST_NAME || "localhost";

viewEngine(app);

app.use('/', router);


app.listen(port, host_name, () => {
    console.log(`Server is running on ${host_name}:${port}`);
});