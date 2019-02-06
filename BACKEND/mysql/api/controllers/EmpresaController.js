/**
 * EmpresaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  holaMundo: function (req, res) {
    return res.ok('ok');
  },

  buscarPorNombre: async function (req, rep) {
    const parametros = req.allParams();

    var nombreEmp = await Empresa.find({
      nombre: { 'startsWith': parametros.nombre
        }});
    return rep.ok(nombreEmp);

  },

};

