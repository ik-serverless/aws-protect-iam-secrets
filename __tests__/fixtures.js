'use strict';

const fs = require('fs');

function setUpTestScenario(filePath) {
	return fs.readFileSync(__dirname + "/" + filePath, "utf8");
}

function cleanUp(done) {
	done();
}

module.exports = {
	setUpTestScenario
};

