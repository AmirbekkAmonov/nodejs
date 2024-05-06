import { writeFile, readFile } from "../helper/database.js"

export const registerController = async (req, res) => {
    try {

        const {
            username,
            password,
            fullName,
            age,
            email,
            gender
        } = req.body
        const users = await readFile("users.json")
        let exist = false

        users.forEach(user => {
            if (user.email === email || user.username === username) {
                exist = true
            }
        })

        if (exist) {
            return res.send(`${username} is alaredy exist`)
        } else {
            const user = { ...req.body, id: users.length + 1 }

            users.push(user)
            writeFile("users.json", users)
            delete user.password
            res.send(user)
        }
        res.send("OK")

    } catch (error) {
        console.log(error)
    }
}