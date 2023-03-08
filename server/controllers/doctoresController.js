const { response } = require("express");
const Doctor = require("../models/Doctor");
const { db } = require("../models/Doctor");

const crearDoctor = async (req, res = response) => {
    try {
      const { foto, name, apellidos, email, numColegiado, telefono_movil, especialidad } = req.body;
  
      // create a new instance of a Doctor
      const doctor = new Doctor({
        foto,
        name,
        apellidos,
        email,
        numColegiado,
        telefono_movil,
        especialidad,
      });
  
      // save the Doctor to the database
      await doctor.save();
  
      // send the Doctor object as a response
      res.status(201).json({
        ok: true,
        msg: "Doctor creado exitosamente",
        doctor
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Error al crear doctor",
      });
    }
  };
  
  
  const borrarDoctor = async (req, res = response) => {
    try {
      const idDoctor = req.params.id;
  
      // find the Doctor by numColegiado and remove it from the database
      const doctor = await Doctor.deleteOne({ _id: idDoctor});
  
      if (!doctor) {
        return res.status(404).json({
          msg: "Doctor no encontrado",
        });
      }
  
      // send a success message as a response
      res.json({
        msg: "Doctor eliminado correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Error al eliminar doctor",
      });
    }
  };
  
  const actualizarDoctor = async (req, res = response) => {
    const { id } = req.params;
    const { name, apellidos, email, numColegiado, telefono_movil, especialidad, foto } = req.body;
  
    try {
      const doctor = await Doctor.findOneAndUpdate(
        { _id: id },
        { name, apellidos, email, numColegiado, telefono_movil, especialidad, foto },
        { new: true }
      );
  
      if (!doctor) {
        return res.status(404).json({
          ok: false,
          msg: 'Doctor not found'
        });
      }
  
      res.json({
        ok: true,
        doctor
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: 'Server error'
      });
    }
  };
  
  
  const verDoctor = async (req, res = response) => {
    const id = req.params.id;
  
    try {
      const doctor = await Doctor.findById(id);
  
      if (!doctor) {
        return res.status(404).json({
          ok: false,
          msg: "Doctor not found",
        });
      }
  
      res.json({
        ok: true,
        doctor,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Unexpected error while getting doctor details",
      });
    }
  };
  
  
  const listarDoctores = async (req, res = response) => {
    try {
      const doctores = await Doctor.find();
      res.status(200).json({
        ok: true,
        doctores
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: 'Error al listar los doctores'
      });
    }
  };
  
  module.exports = {
    crearDoctor,
    borrarDoctor,
    actualizarDoctor,
    verDoctor,
    listarDoctores
  };
  