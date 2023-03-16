import { Router } from "express";
import { addNewInfant, addNewPerson, deleteInfantByID, deletePersonByID, getInfantDetailByID, getPersonDetailByID, getTableData, updateInfantByID, updatePersonByID } from "../controllers/people.controller";

const router = Router()

//GET###############################################################################################################################################################################################
router.get("/table", getTableData)
router.get("/person/:id_persona", getPersonDetailByID)
router.get("/infant/:id_persona", getInfantDetailByID)

router.post("/person", addNewPerson)
router.post("/infant", addNewInfant)

router.put("/person/:id_persona", updatePersonByID)
router.put("/infant/:id_persona", updateInfantByID)

router.delete("/person/:id_persona", deletePersonByID)
router.delete("/infant/:id_persona", deleteInfantByID)

export default router