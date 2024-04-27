import fs from "node:fs";

fs.readFile("./os.txt", "utf-8",(err, data) => {
    if (err) {
        console.log(err);
        return err
    }
    let newData = data.toUpperCase().split('\n').join("#######")
    fs.writeFileSync("./os.txt", newData)
})

console.log("SALOM");