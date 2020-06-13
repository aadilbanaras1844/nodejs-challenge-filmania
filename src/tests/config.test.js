let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('./../app');

const config = require('./../config');


describe('configuration Tests', () => {
    it('Should have necessary parameters', (done) => {
        (config.mongoUrl).should.be.a('string');
        (config.port).should.be.a('number');
        done();
    });
});