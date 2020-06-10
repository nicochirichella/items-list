const util = require('util');

function insertFailure(message = null, code = null, context = null) {
    this.code = code ? code : 'insert_fail';
    this.message = message ? message : 'there was an error trying to make an insert';
    this.context = context ? context : {};
    this.status = 400;
}

function JsonSchemaError(schema, body, validation) {
    Error.captureStackTrace(this, this.constructor);
    this.message = 'There are % errors in the body'.replace('%', validation.errors.length);
    this.status = 400;
    this.code = 'json_schema_error';
    this.context = {
      schema,
      body,
      errors: validation.errors,
    };
}

util.inherits(insertFailure, Error);
util.inherits(JsonSchemaError, Error);

module.exports = {
    insertFailure,
    JsonSchemaError,
};