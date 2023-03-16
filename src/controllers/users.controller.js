import { getConnection, queries, sql } from "../database";
import { config } from "dotenv";

//GET###############################################################################################################################################################################################
export const getUserByEmail = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("email", req.query.email)
      .input("psw", req.query.psw)
      .query(queries.getUserByEmail);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .query(queries.getAllUsers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateGuideByID = async (req, res) => {
  const { id_usr } = req.body;

  // validating
  if (id_usr == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id_usr", sql.Int, id_usr)
      .input("id_persona", req.params.id_persona)
      .query(queries.updateGuideByID);
    res.json("Se ha modificado con éxito el guia de esta persona.");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
