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

function NoneExistentElement(message = null, code = null, context = null) {
    this.code = code ? code : 'nonexistent_element';
    this.message = message ? message : 'the element no exist';
    this.context = context ? context : {};
    this.status = 400;
}

function PermissionDenied(message, code, context) {
    this.code = code ? code : 'permission_denied';
    this.message = message ? message : 'the user has no permission';
    this.context = context ? context : {};
    this.status = 404;
}

util.inherits(insertFailure, Error);
util.inherits(JsonSchemaError, Error);
util.inherits(NoneExistentElement, Error);
util.inherits(PermissionDenied, Error);

module.exports = {
    insertFailure,
    JsonSchemaError,
    NoneExistentElement,
    PermissionDenied
};