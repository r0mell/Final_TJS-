1
/**
 * Empresa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {type: 'string', required: true},
    razonSocial: {type: 'string', required: true, columnName: 'razon_social'},
    telefono: {type: 'string', required: true, unique: true},
    correo: {type: 'string', isEmail: true},

    //para relacion muchos muchos
    sucursales: {
      collection: 'Sucursal',
      via: 'idEmpresa'
    }

  },

};

