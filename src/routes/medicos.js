import { Router } from "express";
import Medicos from "../services/medicos.js"
import { validate } from "../validations/validateService.js";
const router = Router()

router.get('/obtener', validate(Medicos.getMedico))

export { router };