let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('./../app');


//Our parent block
describe('Web Routes Test', () => {
    describe('/ShOW Films', () => {
        it('it should SHOW all the Films', (done) => {
            chai.request(server)
                .get('/films')
                .end((err, res) => {
                    (res).should.have.status(200);
                    done();
                });
        });
    });

});