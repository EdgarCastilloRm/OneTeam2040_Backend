import { getConnection, queries, sql } from "../database";
const jwt = require('jsonwebtoken');
import { config } from "dotenv";

//GET###############################################################################################################################################################################################
export const authentication = async (req, res) => {
  const {email, psw} = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("psw", sql.VarChar, psw)
      .query(queries.getUserByEmail);
    var dataToken = result.recordset[0];
    var token = generateAccessToken(dataToken);
    console.log(token);
    res.json(token);
  } catch (error) {
    res.status(500).json({ msg: "Bad Request. Ingrese las credenciales correctas." });
  }
};

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET);
}

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
