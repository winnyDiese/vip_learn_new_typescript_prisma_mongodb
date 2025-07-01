import express, { Request, Response } from "express";

require("dotenv").config()
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = process.env.PORT || 8000

app.use(express.json())

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})


// create an api
app.get("/customers", async (req:Request, res:Response) => {
    const customers = [
        { name: "John Doe", email: "john.doe@gmail.com", phone: "+123456789" },
        { name: "Alice Smith", email: "alice.smith@yahoo.com", phone: "+987654321" },
        { name: "Carlos Mendes", email: "carlos.mendes@hotmail.com", phone: "+3344556677" },
        { name: "Fatima Zahra", email: "fatima.zahra@outlook.com", phone: "+1122334455" },
        { name: "Kenji Takahashi", email: "kenji.takahashi@gmail.com", phone: "+5566778899" },
    ];

    return res.status(200).json(customers)
})