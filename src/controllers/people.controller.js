import { getConnection, queries, sql } from "../database";
import { config } from "dotenv";

//GET###############################################################################################################################################################################################
export const getTableData = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getTableData);
    var obj = {
      count: 0,
      entries: result.recordset,
    };
    obj.count = Object.keys(result.recordset).length;
    res.json(obj);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPersonDetailByID = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id_persona", req.params.id_persona)
      .query(queries.getPersonDetailByID);

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getInfantDetailByID = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id_persona", req.params.id_persona)
      .query(queries.getInfantDetailByID);

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//POST##############################################################################################################################################################################################
export const addNewPerson = async (req, res) => {
  const {
    nombre_persona,
    apellido_paterno,
    apellido_materno,
    foto_persona,
    sexo,
    telefono,
    id_tipo_persona,
    fecha_nacimiento,
    estatus_acomp,
    id_estado_civil,
    id_SGM,
    nivel_escolar,
    ultimo_grado,
    estudiando,
    carrera,
    id_empleo,
    ocupacion,
    seguro_empresa,
    salario_fijo_mensual,
    id_religion,
    id_usr
  } = req.body;
  let { posicion_laboral, nivel_religion } =
    req.body;

  // validating
  if (
    nombre_persona == null ||
    apellido_paterno == null ||
    apellido_materno == null ||
    foto_persona == null ||
    sexo == null ||
    telefono == null ||
    id_tipo_persona == null ||
    fecha_nacimiento == null ||
    estatus_acomp == null ||
    id_estado_civil == null ||
    id_SGM == null ||
    nivel_escolar == null ||
    ultimo_grado == null ||
    estudiando == null ||
    carrera == null ||
    id_empleo == null ||
    seguro_empresa == null ||
    salario_fijo_mensual == null ||
    id_religion == null ||
    ocupacion == null ||
    id_usr == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre_persona", sql.VarChar, nombre_persona)
      .input("apellido_paterno", sql.VarChar, apellido_paterno)
      .input("apellido_materno", sql.VarChar, apellido_materno)
      .input("telefono", sql.VarChar, telefono)
      .input("id_tipo_persona", sql.Int, id_tipo_persona)
      .input("fecha_nacimiento", sql.Date, fecha_nacimiento)
      .input("foto_persona", sql.Bit, foto_persona)
      .input("sexo", sql.Bit, sexo)
      .input("estatus_acomp", sql.VarChar, estatus_acomp)
      .input("id_estado_civil", sql.Int, id_estado_civil)
      .input("id_SGM", sql.Int, id_SGM)
      .input("nivel_escolar", sql.VarChar, nivel_escolar)
      .input("ultimo_grado", sql.VarChar, ultimo_grado)
      .input("estudiando", sql.Bit, estudiando)
      .input("carrera", sql.VarChar, carrera)
      .input("id_empleo", sql.Int, id_empleo)
      .input("ocupacion", sql.VarChar, ocupacion)
      .input("seguro_empresa", sql.Bit, seguro_empresa)
      .input("salario_fijo_mensual", sql.Decimal(22,2), salario_fijo_mensual)
      .input("id_religion", sql.Int, id_religion)
      .input("id_usr", sql.Int, id_usr)
      .input("posicion_laboral", sql.VarChar, posicion_laboral)
      .input("nivel_religion", sql.VarChar, nivel_religion)
      .query(queries.addNewPerson);
    res.json("Se ha añadido la persona.");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const addNewInfant = async (req, res) => {
  const {
    nombre_persona,
    apellido_paterno,
    apellido_materno,
    foto_persona,
    sexo,
    telefono,
    id_tipo_persona,
    fecha_nacimiento,
    estatus_acomp,
    id_estado_civil,
    id_SGM,
    nivel_escolar,
    ultimo_grado,
    estudiando,
    carrera,
    id_empleo,
    ocupacion,
    seguro_empresa,
    salario_fijo_mensual,
    id_religion,
    curp,
    enteradoPlan,
    responsable,
    estado,
    municipio,
    localidad,
    colonia,
    calle,
    num_ext,
    codigo_postal,
    id_estado_civil_padres,
    casa,
    fam_confianza,
    numHermanos,
    registro_civil,
    foto_acta,
    hospital,
    peso,
    estatura,
    foto_cartilla,
    vacuna_auditiva,
    vacuna_tamiz,
    bautizado,
    id_usr
  } = req.body;
  let { posicion_laboral, nivel_religion,vacuna_BGC, vacuna_hepatitis, num_int } =
    req.body;

  // validating
  if (
    id_usr == null ||
    nombre_persona == null ||
    apellido_paterno == null ||
    apellido_materno == null ||
    foto_persona == null ||
    sexo == null ||
    telefono == null ||
    id_tipo_persona == null ||
    fecha_nacimiento == null ||
    estatus_acomp == null ||
    id_SGM == null ||
    id_religion == null ||
    curp == null ||
    enteradoPlan == null ||
    responsable == null ||
    estado == null ||
    municipio == null ||
    localidad == null ||
    colonia == null ||
    calle == null ||
    num_ext == null ||
    codigo_postal == null ||
    id_estado_civil_padres == null ||
    casa == null ||
    fam_confianza == null ||
    numHermanos == null ||
    registro_civil == null ||
    foto_acta == null ||
    hospital == null ||
    peso == null ||
    estatura == null ||
    foto_cartilla == null ||
    vacuna_auditiva == null ||
    vacuna_tamiz == null ||
    bautizado == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id_persona", req.params.id_persona)
      .input("nombre_persona", sql.VarChar, nombre_persona)
      .input("apellido_paterno", sql.VarChar, apellido_paterno)
      .input("apellido_materno", sql.VarChar, apellido_materno)
      .input("telefono", sql.VarChar, telefono)
      .input("id_tipo_persona", sql.Int, id_tipo_persona)
      .input("fecha_nacimiento", sql.Date, fecha_nacimiento)
      .input("foto_persona", sql.Bit, foto_persona)
      .input("sexo", sql.Bit, sexo)
      .input("estatus_acomp", sql.VarChar, estatus_acomp)
      .input("id_estado_civil", sql.Int, id_estado_civil)
      .input("id_SGM", sql.Int, id_SGM)
      .input("nivel_escolar", sql.VarChar, nivel_escolar)
      .input("ultimo_grado", sql.VarChar, ultimo_grado)
      .input("estudiando", sql.Bit, estudiando)
      .input("carrera", sql.VarChar, carrera)
      .input("id_empleo", sql.Int, id_empleo)
      .input("ocupacion", sql.VarChar, ocupacion)
      .input("seguro_empresa", sql.Bit, seguro_empresa)
      .input("salario_fijo_mensual", sql.Decimal(22,2), salario_fijo_mensual)
      .input("id_religion", sql.Int, id_religion)
      .input("curp", sql.VarChar, curp)
      .input("enteradoPlan", sql.VarChar, enteradoPlan)
      .input("responsable", sql.VarChar, responsable)
      .input("estado", sql.VarChar, estado)
      .input("municipio", sql.VarChar, municipio)
      .input("localidad", sql.VarChar, localidad)
      .input("colonia", sql.VarChar, colonia)
      .input("calle", sql.VarChar, calle)
      .input("num_ext", sql.Int, num_ext)
      .input("codigo_postal", sql.Int, codigo_postal)
      .input("id_estado_civil_padres", sql.Int, id_estado_civil_padres)
      .input("casa", sql.VarChar, casa)
      .input("fam_confianza", sql.Bit, fam_confianza)
      .input("numHermanos", sql.Int, numHermanos)
      .input("registro_civil", sql.Bit, registro_civil)
      .input("foto_acta", sql.Bit, foto_acta)
      .input("hospital", sql.VarChar, hospital)
      .input("peso", sql.Decimal(5,2), peso)
      .input("estatura", sql.Decimal(5,2), estatura)
      .input("foto_cartilla", sql.Bit, foto_cartilla)
      .input("vacuna_tamiz", sql.Bit, vacuna_tamiz)
      .input("vacuna_auditiva", sql.Bit, vacuna_auditiva)
      .input("bautizado", sql.Bit, bautizado)
      .input("posicion_laboral", sql.VarChar, posicion_laboral)
      .input("nivel_religion", sql.VarChar, nivel_religion)
      .input("vacuna_BGC", sql.Date, vacuna_BGC)
      .input("vacuna_hepatitis", sql.Date, vacuna_hepatitis)
      .input("num_int", sql.Int, num_int)
      .input("id_usr", sql.Int, id_usr)
      .query(queries.addNewInfant);

    res.json("Se ha añadido la persona.");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//PUT###############################################################################################################################################################################################
export const updatePersonByID = async (req, res) => {
  const {
    nombre_persona,
    apellido_paterno,
    apellido_materno,
    foto_persona,
    sexo,
    telefono,
    id_tipo_persona,
    fecha_nacimiento,
    estatus_acomp,
    id_estado_civil,
    id_SGM,
    nivel_escolar,
    ultimo_grado,
    estudiando,
    carrera,
    id_empleo,
    ocupacion,
    seguro_empresa,
    salario_fijo_mensual,
    id_religion,
    id_usr
  } = req.body;
  let { posicion_laboral, nivel_religion } =
    req.body;

  // validating
  if (
    nombre_persona == null ||
    apellido_paterno == null ||
    apellido_materno == null ||
    foto_persona == null ||
    sexo == null ||
    telefono == null ||
    id_tipo_persona == null ||
    fecha_nacimiento == null ||
    estatus_acomp == null ||
    id_estado_civil == null ||
    id_SGM == null ||
    nivel_escolar == null ||
    ultimo_grado == null ||
    estudiando == null ||
    carrera == null ||
    id_empleo == null ||
    seguro_empresa == null ||
    salario_fijo_mensual == null ||
    id_religion == null ||
    ocupacion == null ||
    id_usr == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id_persona", req.params.id_persona)
      .input("nombre_persona", sql.VarChar, nombre_persona)
      .input("apellido_paterno", sql.VarChar, apellido_paterno)
      .input("apellido_materno", sql.VarChar, apellido_materno)
      .input("telefono", sql.VarChar, telefono)
      .input("id_tipo_persona", sql.Int, id_tipo_persona)
      .input("fecha_nacimiento", sql.Date, fecha_nacimiento)
      .input("foto_persona", sql.Bit, foto_persona)
      .input("sexo", sql.Bit, sexo)
      .input("estatus_acomp", sql.VarChar, estatus_acomp)
      .input("id_estado_civil", sql.Int, id_estado_civil)
      .input("id_SGM", sql.Int, id_SGM)
      .input("nivel_escolar", sql.VarChar, nivel_escolar)
      .input("ultimo_grado", sql.VarChar, ultimo_grado)
      .input("estudiando", sql.Bit, estudiando)
      .input("carrera", sql.VarChar, carrera)
      .input("id_empleo", sql.Int, id_empleo)
      .input("ocupacion", sql.VarChar, ocupacion)
      .input("seguro_empresa", sql.Bit, seguro_empresa)
      .input("salario_fijo_mensual", sql.Decimal(22,2), salario_fijo_mensual)
      .input("id_religion", sql.Int, id_religion)
      .input("id_usr", sql.Int, id_usr)
      .input("posicion_laboral", sql.VarChar, posicion_laboral)
      .input("nivel_religion", sql.VarChar, nivel_religion)
      .query(queries.updatePersonByID);
    res.json("Se ha actualizado la información de la persona.");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateInfantByID = async (req, res) => {
  const {
    nombre_persona,
    apellido_paterno,
    apellido_materno,
    foto_persona,
    sexo,
    telefono,
    id_tipo_persona,
    fecha_nacimiento,
    estatus_acomp,
    id_estado_civil,
    id_SGM,
    nivel_escolar,
    ultimo_grado,
    estudiando,
    carrera,
    id_empleo,
    ocupacion,
    seguro_empresa,
    salario_fijo_mensual,
    id_religion,
    curp,
    enteradoPlan,
    responsable,
    estado,
    municipio,
    localidad,
    colonia,
    calle,
    num_ext,
    codigo_postal,
    id_estado_civil_padres,
    casa,
    fam_confianza,
    numHermanos,
    registro_civil,
    foto_acta,
    hospital,
    peso,
    estatura,
    foto_cartilla,
    vacuna_auditiva,
    vacuna_tamiz,
    bautizado,
    id_usr
  } = req.body;
  let { posicion_laboral, nivel_religion, vacuna_BGC, vacuna_hepatitis, num_int } =
    req.body;

  // validating
  if (
    id_usr == null ||
    nombre_persona == null ||
    apellido_paterno == null ||
    apellido_materno == null ||
    foto_persona == null ||
    sexo == null ||
    telefono == null ||
    id_tipo_persona == null ||
    fecha_nacimiento == null ||
    estatus_acomp == null ||
    id_SGM == null ||
    id_religion == null ||
    curp == null ||
    enteradoPlan == null ||
    responsable == null ||
    estado == null ||
    municipio == null ||
    localidad == null ||
    colonia == null ||
    calle == null ||
    num_ext == null ||
    codigo_postal == null ||
    id_estado_civil_padres == null ||
    casa == null ||
    fam_confianza == null ||
    numHermanos == null ||
    registro_civil == null ||
    foto_acta == null ||
    hospital == null ||
    peso == null ||
    estatura == null ||
    foto_cartilla == null ||
    vacuna_auditiva == null ||
    vacuna_tamiz == null ||
    bautizado == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id_persona", req.params.id_persona)
      .input("nombre_persona", sql.VarChar, nombre_persona)
      .input("apellido_paterno", sql.VarChar, apellido_paterno)
      .input("apellido_materno", sql.VarChar, apellido_materno)
      .input("telefono", sql.VarChar, telefono)
      .input("id_tipo_persona", sql.Int, id_tipo_persona)
      .input("fecha_nacimiento", sql.Date, fecha_nacimiento)
      .input("foto_persona", sql.Bit, foto_persona)
      .input("sexo", sql.Bit, sexo)
      .input("estatus_acomp", sql.VarChar, estatus_acomp)
      .input("id_estado_civil", sql.Int, id_estado_civil)
      .input("id_SGM", sql.Int, id_SGM)
      .input("nivel_escolar", sql.VarChar, nivel_escolar)
      .input("ultimo_grado", sql.VarChar, ultimo_grado)
      .input("estudiando", sql.Bit, estudiando)
      .input("carrera", sql.VarChar, carrera)
      .input("id_empleo", sql.Int, id_empleo)
      .input("ocupacion", sql.VarChar, ocupacion)
      .input("seguro_empresa", sql.Bit, seguro_empresa)
      .input("salario_fijo_mensual", sql.Decimal(22,2), salario_fijo_mensual)
      .input("id_religion", sql.Int, id_religion)
      .input("curp", sql.VarChar, curp)
      .input("enteradoPlan", sql.VarChar, enteradoPlan)
      .input("responsable", sql.VarChar, responsable)
      .input("estado", sql.VarChar, estado)
      .input("municipio", sql.VarChar, municipio)
      .input("localidad", sql.VarChar, localidad)
      .input("colonia", sql.VarChar, colonia)
      .input("calle", sql.VarChar, calle)
      .input("num_ext", sql.Int, num_ext)
      .input("codigo_postal", sql.Int, codigo_postal)
      .input("id_estado_civil_padres", sql.Int, id_estado_civil_padres)
      .input("casa", sql.VarChar, casa)
      .input("fam_confianza", sql.Bit, fam_confianza)
      .input("numHermanos", sql.Int, numHermanos)
      .input("registro_civil", sql.Bit, registro_civil)
      .input("foto_acta", sql.Bit, foto_acta)
      .input("hospital", sql.VarChar, hospital)
      .input("peso", sql.Decimal(5,2), peso)
      .input("estatura", sql.Decimal(5,2), estatura)
      .input("foto_cartilla", sql.Bit, foto_cartilla)
      .input("vacuna_tamiz", sql.Bit, vacuna_tamiz)
      .input("vacuna_auditiva", sql.Bit, vacuna_auditiva)
      .input("bautizado", sql.Bit, bautizado)
      .input("posicion_laboral", sql.VarChar, posicion_laboral)
      .input("nivel_religion", sql.VarChar, nivel_religion)
      .input("vacuna_BGC", sql.Date, vacuna_BGC)
      .input("vacuna_hepatitis", sql.Date, vacuna_hepatitis)
      .input("num_int", sql.Int, num_int)
      .input("id_usr", sql.Int, id_usr)
      .query(queries.updateInfantByID);
    res.json("Se ha actualizado la información de la persona.");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//DELETE############################################################################################################################################################################################
export const deletePersonByID = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_persona", req.params.id_persona)
      .query(queries.deletePersonByID);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.json("Se ha eliminado esta persona.");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteInfantByID = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_persona", req.params.id_persona)
      .query(queries.deleteInfantByID);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.json("Se ha eliminado esta persona.");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};