import express from "express";
import dotenv from 'dotenv'
import usersRouter from "./routes/users.router.js";

const app = express();
dotenv.config()
app.use(express.json())

app.use('/users', usersRouter.router);
const port = process.env.PORT || 5554;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});