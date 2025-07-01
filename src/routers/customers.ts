import {
    createCustomer,
    getCustomerById,
    getCustomers
} from "@/controllers/customers"
import express from "express"

const customerRouter = express.Router()

customerRouter.post("/customers", createCustomer)
customerRouter.get("/customers", getCustomers)
customerRouter.post("/customers/:id", getCustomerById)

export default customerRouter