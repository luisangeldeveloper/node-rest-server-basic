const { response, request } = require('express');

const usuariosGet = (req =request, res = response ) => {

  //http://localhost:8080/api/usuarios?q=holal&apikey=1212345&page=2&limit=10
  const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

  res.json({
    msg: 'get API - controlador',
    q,
    nombre,
    apikey,
    page,
    limit
  });
}

const usuariosPost = (req, res = response) => {

  //2. const body = req.body;
  const { nombre, edad } = req.body;
  //1. status(201)
  res.json({
    msg: 'post API - controlador',
    //2. body
    nombre,
    edad
  });
}

const usuariosPut = (req, res = response) => {

  const { id } = req.params;

  res.json({
    msg: 'put API - controlador',
    id
  });
}

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controlador'
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controlador'
  });
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}