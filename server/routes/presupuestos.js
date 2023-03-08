const { Router } = require("express");
const { check } = require("express-validator");
const { crearPresupuesto, borrarPresupuesto, actualizarPresupuesto, verPresupuesto, listarPresupuestoSinId, listarPresupuestoConId } = require("../controllers/presupuestosController");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

//Crear presupuesto
router.post(
  "/addPresupuesto",
  [
    check("name", "El campo del nombre está vacío").notEmpty(),
    check("descripcion", "El campo de los apellidos está vacío").notEmpty(),
    check("precio", "El campo del precio está vacío").notEmpty(),
    check("fecha", "El campo de la fecha está vacío").notEmpty(),
    check("categoria", "El campo de la categoría está vacío").notEmpty(),
    check("descripcion", "El campo de la descripción está vacío").notEmpty(),
    validarCampos,
  ],
  crearPresupuesto
);

// Borrar presupuesto
router.delete("/deletePresupuesto/:id", borrarPresupuesto);

// Actualizar presupuesto
router.put(
  "/actualizarPresupuesto/:id",
  [
    check("name", "El campo del nombre está vacío").notEmpty(),
    check("descripcion", "El campo de los apellidos está vacío").notEmpty(),
    check("precio", "El campo del precio está vacío").notEmpty(),
    check("fecha", "El campo de la fecha está vacío").notEmpty(),
    check("categoria", "El campo de la categoría está vacío").notEmpty(),
    check("descripcion", "El campo de la descripción está vacío").notEmpty(),
    validarCampos,
  ],
  actualizarPresupuesto
);

// Ver presupuesto
router.get("/verPresupuesto/:id", verPresupuesto);

// Listar presupuestos sin ID
router.get("/listarPresupuestoSinId", listarPresupuestoSinId);

// Listar presupuestos con ID
router.get("/listarPresupuestoConId", listarPresupuestoConId);

module.exports = router;
