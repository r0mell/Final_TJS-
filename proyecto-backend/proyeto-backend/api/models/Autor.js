/**
 * Autor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'bd_autor',
  attributes: {

    /*autorId: {
      type: 'number',
      columnName: 'autor_id',
      required: true,
    },*/
    nombreAutor: {
      type: 'string',
      columnName: 'nombre_autor',
      required: true,
    },
    apellidoAutor: {
      type: 'string',
      columnName: 'apellido_autor',
      required: true,
    },
    /*fechaNacimiento:{
      type:'string',
      columnName: 'fecha_nacimiento',
      required: true,
    },
    numeroLibros:{
      type:'number',
      columnName: 'numero_libros',
      required: true,
      isInteger: true,
    },
    Ecuatoriano:{
      type:'boolean',
      required: true,
    },*/
    libros:{
      collection:'Libro',
      via:'idAutor'
    },
  },
};

