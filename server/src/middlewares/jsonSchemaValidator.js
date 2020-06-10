const Promise = require('bluebird');
const errors = require('../errors');
const Validator = require('jsonschema').Validator;

let v = new Validator();

const jsValidator = {
    schemas: {
        'itemSchema.json': require('../schemas/itemSchema.json')
    },
};

jsValidator.validate = function jsValidate(schemaName, json) {
    return new Promise((resolve, reject) => {
        const schema = jsValidator.schemas[schemaName];
        const validation = v.validate(json, schema);

        if (validation.valid) {
            resolve();
        } else {
            reject(new errors.JsonSchemaError(schema, json, validation));
        }
    })
};


jsValidator.validateFor = function jsValidateFor(schema) {
    return (req, res, next) => {
      const body = req.body;
  
      jsValidator.validate(schema, body)
        .then(() => next())
        .catch(next);
    };
};

module.exports = jsValidator;