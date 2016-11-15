/**
 * User.js
 *
 * @description :: Basic user model with an id, and name.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'localMongoDb',
  attributes: {
    id: 'int',
    name: 'string'
  }
};
