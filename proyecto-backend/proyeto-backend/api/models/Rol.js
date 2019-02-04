/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'bd_rol',
  attributes: {

    /*idRol: {
      type: 'number',
      columnName: 'id_rol',
      required: true,
      isInteger: true,
    },*/
    tipoRol: {
      type: 'string',
      columnName: 'tipo_rol',
      required: true,
    },
    rolporUsuarios:{
      collection:'RolPorUsuario',
      via:'idRol'
    },
  },

};

