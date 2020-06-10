const util = require('util');

function insertFailure(message = null, code = null, context = null) {
    this.code = code ? code : 'insert_fail';
    this.message = message ? message : 'there was an error trying to make an insert';
    this.context = context ? context : '-';
    this.status = 400;
}

util.inherits(insertFailure, Error);

module.exports = {
    insertFailure,
};