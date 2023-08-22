import { Router } from "express";
import Pacientes from "../services/pacientes.js"
import { validate } from "../validations/validateService.js";
const router = Router()

router.get('/obtener', validate(Pacientes.getPaciente))

export { router };