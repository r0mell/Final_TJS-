/**
 * Ventilador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    velocidad: {type: 'number'},
    estado: {type: 'string',
      isIn: ['encendido','apagado'], defaultsTo: 'apagado'},
  },

};

