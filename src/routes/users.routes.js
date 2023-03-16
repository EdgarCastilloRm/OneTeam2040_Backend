import { Router } from "express";
import { getAllUsers, getUserByEmail, updateGuideByID } from "../controllers/users.controller";

const router = Router()

//GET###############################################################################################################################################################################################
router.get("/users", getUserByEmail)
router.get("/users/all", getAllUsers)

router.put("/guide/:id_persona", updateGuideByID)

export default router