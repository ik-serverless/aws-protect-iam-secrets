"use strict";

const
    { hours } = require("./utils");

const users = async (provider, config) => {
    var params = {
        MaxItems: 100
    };
    return provider.listUsers(params).promise();
};

const deactivateKey = async (provider, params) => {
    return await provider.updateAccessKey(params).promise();
};

const deleteKey = async (provider, params) => {
    return await provider.deleteAccessKey(params).promise();
};

const accessKeyAnalyze = async (provider, params) => {
    let { AccessKeyMetadata } = await provider.listAccessKeys(params).promise();
    let now = new Date();
    return AccessKeyMetadata.map(e => {
        return {
            userName: e.UserName,
            accessKeyId: e.AccessKeyId,
            status: e.Status,
            createDate: hours(e.CreateDate, now)
        }
    })
};

module.exports = {
    users,
    accessKeyAnalyze,
    deactivateKey,
    deleteKey
};
