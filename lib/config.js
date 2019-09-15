"use strict";

const { get } = require('env-var');

module.exports = {
    region: get('REGION').required().asString(),
    nodeEnv: get('NODE_ENV').required().asString(),
    delete: get('DELETE').required().asBoolStrict(),
    deactivateHours: get('DEACTIVATE_KEYS_HOURS').required().asIntPositive(),
    deleteHours: get('DELETE_KEYS_HOURS').required().asIntPositive(),
};