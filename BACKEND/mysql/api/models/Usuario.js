/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  //Para cambiar el nombre de la tabla
  tableName: 'db_usuario',

  attributes: {

    //EstandarSQL y estandar Javascript
    /*
    direccionCasa: {  // tipoJavascript
    type: 'string',
    columnName: 'direccion_casa'  // tipo sql
    }
     */

    nombre: {type: 'string', required: true},
    apellido: {type: 'string', required: true},
    cedula: {type: 'string', required: true, unique: true},
    sueldo: {type: 'number', defaultsTo: 394.00},
    correo: {type: 'string', isEmail: true},
    cargo: {type: 'string',
      isIn: ['admin','user','invitado'], defaultsTo: 'user'},
  },

};

