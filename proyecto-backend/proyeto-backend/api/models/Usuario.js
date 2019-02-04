/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
tableName:'bd_usuario',
  attributes: {

    /*usuarioId: {
      type: 'number',
      columnName: 'usuario_id',
      required: true,
      isInteger: true
    },*/
    nombreUsuario: {
      type: 'string',
      columnName: 'nombre_usuario',
      required: true,
    },
    /*correoUsuario: {
      type: 'string',
      columnName: 'correo_usuario',
      required: true,
      isEmail: true
    },
    passwordUsuario:{
      type:'string',
      columnName: 'password_usuario',
      required: true,
    },
    fechaNacimientoUsuario:{
      type:'string',
      columnName: 'fecha_nacimientousuario',
      required: true,
    },*/
    rolporUsuarios:{
      collection:'RolPorUsuario',
      via:'idUsuario'
    },
  },

};

