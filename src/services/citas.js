import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const quotes = db.getInstance().changeCollection('quotes').connect()

export default class Citas {
    static async getCita(req, res) {
        const consulta = await quotes.find({}).toArray()
        res.status(200).json({ data: consulta, msg: "consulta exitosa"})
    }
}