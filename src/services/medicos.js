import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const doctors = db.getInstance().changeCollection('doctors').connect()

export default class Medicos {
    static async getMedico(req, res) {
        console.log(req.query)
        if (req.query.specialty){   
            const consulta = await doctors.find( {"specialty.name": req.query.specialty} ).toArray()
            res.status(200).json({ data: consulta, msg: "consulta exitosa"})
        }
        else { 
            const consulta = await doctors.find().toArray()
            res.status(200).json({ data: consulta, msg: "consulta exitosa"})
        }  
    }
}