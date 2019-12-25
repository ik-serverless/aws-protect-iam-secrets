"use strict";

const
    { region } = require("./config"),
    AWS = require('aws-sdk'),
    provider = new AWS.IAM({ apiVersion: '2010-05-08', region: region });

module.exports = { provider };