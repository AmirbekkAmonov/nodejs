import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.router.js";


const app = express();

app.use(bodyParser.json());

app.use('/users', usersRouter);
const PORT = process.env.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});