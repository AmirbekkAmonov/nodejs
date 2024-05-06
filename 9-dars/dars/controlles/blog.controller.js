import { writeFile, readFile } from "../helper/database.js"


export const blogController = async (req, res) => {
    const {
        tittle,
        slug,
        content,
        tags,
    } = req.body

    const blog = await readFile("blog.json")
    let blogExist = false
    blog.forEach(article => {
        if (article.slug === slug) {
            blogExist = true
        }
    })

    const newArticle = {
        ...req.body,
        id: blog.length + 1
    }

    if (blogExist) {
        return res.send(`${tittle} article alaredy exist!`)
    }
    blog.push(newArticle)
    delete newArticle.slug

    writeFile("blog.json", blog)
    return res.send(newArticle)
}