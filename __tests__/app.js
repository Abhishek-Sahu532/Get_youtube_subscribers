var chai = require('chai')
const app = require('../src/app');
const chaiHttp = require('chai-http');
var request = require('request');

chai.should();
chai.use(chaiHttp)

describe('Status and content', ()=>{
    describe ('It should get all the subscriber', ()=>{
        it('status', (done)=>{
           chai.request(app).get('https://localhost:3000/subscribers').end((err,res) =>{
            res.should.have.status(200);
            res.should.be.a('array')
           })
        })
    })


    describe ('It should get all the subscriber with only name and subscribed channel', ()=>{
        it('status', (done)=>{
           chai.request(app).get('https://localhost:3000/subscribers/names').end((err,res) =>{
            res.should.have.status(200);
            res.should.be.a('array')
           })
        })
    })

})