import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const users = db.getInstance().changeCollection('users').connect()

export default class Pacientes {
    static async getPaciente(req, res) {
        const consulta = await users.find({}).toArray()
        res.status(200).json({ data: consulta, msg: "consulta exitosa"})
    }
}