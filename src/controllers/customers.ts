import { bd } from "@/db/db"
import { Request, Response} from "express"

export async function createCustomer(req: Request, res: Response) {
    const {name, email, phone} = req.body

    try {
        const newCustomer = await db.customer.create({
            data: {
                name,
                email,
                phone
            }
        })

        return res.status(201).json(newCustomer)
    } catch (error) {
        console.log(error)
    }
}

export async function getCustomers(req: Request, res: Response){
    try {
        const customers = await db.customerfindMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        return res.status(200).json(customers)
    } catch (error) {
        console.log(error)
    }
}

export async function getCustomerById(req: Request, res:Response) {
    const {id} = req.params

    try {
        const customer = await db.customer.findUnique({
            where:{id}
        })
        return res.status(200).json(customer)
    } catch (error) {
        console.log(error)
    }
}

