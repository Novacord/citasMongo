import { Router } from "express";
import Citas from "../services/citas.js"
import { validate } from "../validations/validateService.js";
const router = Router()

router.get('/obtener', validate(Citas.getCita))

export { router };