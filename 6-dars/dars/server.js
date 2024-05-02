import express from "express";

const app = express()

app.get('/toDo', async function (req, res) {
    const request = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await request.json()
    res.send(data)
})

app.listen(3000, () => {
    console.log("Server ishladi");
})
