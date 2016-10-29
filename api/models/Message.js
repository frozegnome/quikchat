/**
 * Message.js
 *
 * @description :: Basic Message model to be cached to Redis. Contains attributes of sender, recipient, and payload.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'localRedis',
  attributes: {
    'sender': 'string',
    'recipient': 'string',
    'payload': 'string'
  }
};
