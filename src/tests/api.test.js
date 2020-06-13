let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('./../app');


//Our parent block
describe('Api Tests', () => {
    describe('/GET films', () => {
        it('it should GET all the Films', (done) => {
            chai.request(server)
                .get('/api/films')
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    (res.body.data).should.be.a('array');
                    done();
                });
        });
    });

    describe('/ADD film', () => {
        it('it should fail to add Film', (done) => {
            chai.request(server)
                .post('/api/films')
                .send({
                    '_method': 'post',
                })
                .end((err, res) => {
                    (res).should.have.status(500);
                    done();
                });
        });
    });

});