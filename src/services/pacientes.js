import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const users = db.getInstance().changeCollection('users').connect()

export default class Pacientes {
    static async getPaciente(req, res) {
        const consulta = await users.find({}).toArray()
        res.status(200).json({ data: consulta, msg: "consulta exitosa"})
    }
    static async postPaciente(req, res) {
        try {
            const { attendant, age } = req.body;

            if (age < 18 && !attendant) {
                return res.status(400).json({ msg: 'Un paciente menor de edad debe tener un acudiente.' });
            }
            await users.insertOne(req.body);
            return res.status(201).json({ msg: 'Paciente registrado exitosamente.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Error en el servidor.' });
        }
    }
}