import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const quotes = db.getInstance().changeCollection('quotes').connect()

export default class Citas {
    static async getCita(req, res) {
        if (req.query.date) {
            const startDate = new Date(req.query.date);
            startDate.setUTCHours(0, 0, 0, 0);
    
            const endDate = new Date(req.query.date);
            endDate.setUTCHours(23, 59, 59, 999);
    
            const consulta = await quotes.find({"date": { $gte: startDate, $lte: endDate }}).toArray();
            res.status(200).json({ data: consulta, msg: "consulta exitosa" });
        } else {
            const consulta = await quotes.find({}).toArray();
            res.status(200).json({ data: consulta, msg: "consulta exitosa" });
        }
    }
    static async getCitaUser(req, res) {
        const id = parseInt(req.params.id)
        const consulta = await quotes.findOne({ "user.ID": id })
        res.status(200).json({ data: consulta, msg: "consulta exitosa"})
    }
    static async getCitaUserDoctor(req, res) {
        const id = parseInt(req.params.id)
        const consulta = await quotes.findOne({ "doctor.ID": id })
        res.status(200).json({ data: consulta, msg: "consulta exitosa"})
    }
    static async getCitaUserConsultorio(req, res) {
        const doctors = db.getInstance().changeCollection('doctors').connect()
        const id = parseInt(req.params.id)
        const consultaQuotes = await quotes.findOne({ "user.ID": id })
        const consultaDoctors = await doctors.findOne({ "ID": consultaQuotes.doctor.ID })
        res.status(200).json({ Quotes: consultaQuotes,Doctor: consultaDoctors, msg: "consulta exitosa"})
    }
    static async getCitaUserDate(req, res) {
        const consulta = await quotes.findOne({ "date": req.query.date })
        res.status(200).json({ data: consulta, msg: "consulta exitosa"})
    }
}