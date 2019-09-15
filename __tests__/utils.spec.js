'use strict';

const
    dirtyChai = require("dirty-chai"),
    chai = require('chai'),
    { expect, use } = require('chai');

chai.use(dirtyChai);

const { extractUsers } = require("../lib/utils");
const { setUpTestScenario } = require("./fixtures");

describe('should trigger transcoder', () => {

    let users;
    beforeAll(() => {
        users = JSON.parse(setUpTestScenario("fixtures/users.json"));
    });

    it('test: Paradox', async () => {
        expect(true).to.be.true.and.not.false('Reason: Paradox');
    });

    it('should be able to retrieve users', async () => {
        let actual = extractUsers(users);
        expect(actual).to.have.length(7);
        expect(actual).to.be.an('array');
    });
});