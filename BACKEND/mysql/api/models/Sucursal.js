/**
 * Sucursal.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    codigo: {type: 'number'},
    direccion: { type: 'string', required: true},

    idEmpresa: {
      model: 'Empresa'
    }
  },

};

