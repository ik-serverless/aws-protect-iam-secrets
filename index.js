"use strict";

const
    Log = require('@dazn/lambda-powertools-logger');

const
    { provider } = require("./lib/provider"),
    { ok, extractUsers } = require("./lib/utils"),
    { users, accessKeyAnalyze, deactivateKey } = require("./lib/iam"),
    config = require("./lib/config");

const handler = async (event, ctx) => {
    Log.debug(`Event: ${JSON.stringify(event)}`);
    var result = [];
    let userData = await users(provider, {});
    let extractedUsers = extractUsers(userData);
    Log.info(`Users under review: ${extractedUsers}`);
    let deactivateSecrets = [];
    let deleteSecrets = [];
    for (let username of extractedUsers) {
        var params = {
            MaxItems: 5,
            UserName: username
        };
        let keys = await accessKeyAnalyze(provider, params);
        keys.forEach(e => {
            if (e.status === 'Active' && e.createDate >= config.deactivateHours) {
                deactivateSecrets.push(e);
            }
            if (e.status === 'Inactive' && e.createDate >= config.deleteHours) {
                deleteSecrets.push(e);
            }
        });
    };

    for (let el of deactivateSecrets) {
        Log.info(`deactivate key: ${JSON.stringify(el)}`);
        await deactivateKey(provider, {
            AccessKeyId: el.accessKeyId,
            Status: 'Inactive',
            UserName: el.userName
        });
    }

    for (let el of deleteSecrets) {
        Log.info(`delete key: ${JSON.stringify(el)}. Delete ${config.delete}`);
        if (config.delete) {
            await deleteKeys(provider, {
                AccessKeyId: el.accessKeyId,
                UserName: el.userName
            });
        }
    }

    Log.info(`IAM secretes managed`);
    return ok(`OK`);
};

module.exports = {
    handler
};