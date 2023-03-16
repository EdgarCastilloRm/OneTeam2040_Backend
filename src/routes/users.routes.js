import { Router } from "express";
import { authentication, getAllUsers, updateGuideByID } from "../controllers/users.controller";

const router = Router()

//GET###############################################################################################################################################################################################
router.post("/auth/login", authentication)
router.get("/users/all", getAllUsers)

router.put("/guide/:id_persona", updateGuideByID)

export default router