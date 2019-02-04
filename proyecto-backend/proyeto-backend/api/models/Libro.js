/**
 * Libro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'bd_libro',
  attributes: {

    /*libroId: {
      type: 'number',
      columnName: 'libro_id',
      required: true,
      isInteger: true,
    },*/
    nombreLibro: {
      type: 'string',
      columnName: 'nombre_libro',
      required: true,
    },
    /*icdbn: {
      type: 'number',
      required: true,
    },
    numeroPaginas: {
      type: 'number',
      columnName: 'numero_paginas',
      required: true,
      isInteger: true
    },
    edicion: {
      type: 'number',
      required: true,
    },
    fecha:{
      type:'string',
      columnName: 'fecha',
      required: true,
    },
    nombreEditoria: {
      type: 'string',
      columnName: 'nombre_editorial',
      required: true,
    },*/
    idAutor:{
      model:'Autor',
    },

  },

};

