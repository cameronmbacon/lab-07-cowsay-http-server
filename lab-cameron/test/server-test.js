'use strict';

const server = require('../server.js');
const cowsay = require('cowsay');
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;

chai.use(http);

describe('Server module', function() {
  beforeEach(done => {
    server.listen(3000);
    done();
  });

  describe('POST method', function() {
    describe('\'/\' endpoint', function() {
      it('Should respond with status 200 on a proper request', done => {
        chai.request(server)
        .post('/')
        .send({})
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
        });
        done();
      });
      it('Should respond with status 400 on a bad request', done => {
        chai.request(server)
        .post('/wrong')
        .send({})
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(400);
        });
        done();
      });
    });
    describe('\'/cowsay\' endpoint', function() {
      it('Should respond with status 200 on a proper request', done => {
        chai.request(server)
        .post('/cowsay')
        .send({text: 'test'})
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
        });
        done();
      });
      it('Should respond with status 400 on a bad request', done => {
        chai.request(server)
        .post('/wrong')
        .send({text: 'test'})
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(400);
        });
        done();
      });
    });
  });

  describe('GET method', function() {
    describe('\'/\' endpoint', function() {
      it('Should respond with status 200 on a proper request', done => {
        chai.request(server)
        .get('/')
        .send({})
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
        });
        done();
      });
      it('Should respond with status 400 on a bad request', done => {
        chai.request(server)
        .get('/wrong')
        .send({})
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(400);
        });
        done();
      });
    });
    describe('\'/cowsay\' endpoint', function() {
      it('Should respond with status 200 on a proper request', done => {
        chai.request(server)
        .get('/cowsay')
        .send({text: 'test'})
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
        });
        done();
      });
      it('Should respond with status 400 on a bad request', done => {
        chai.request(server)
        .get('/wrong')
        .send({text: 'test'})
        .end((err, res) => {
          if (err) throw err;
          expect(res.status).to.equal(200);
        });
        done();
      });
    });
  });

  afterEach(done => {
    server.close();
    done();
  });
});
