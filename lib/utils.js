'use strict';

const
    config = require("./config");

const ok = data => {
    return json(200, data);
}

const error = data => {
    return json(400, data);
}

const json = (statusCode, data) => {
    return ({
        statusCode,
        body: JSON.stringify(data),
    });
}

const extractUsers = (data) => {
    let users = data.Users || []
    return users.map(e => e.UserName);
};

const hours = (createDate, current) => {
    return parseInt(Math.abs(current - createDate) / 36e5);
};

module.exports = {
    ok,
    extractUsers,
    hours
}

