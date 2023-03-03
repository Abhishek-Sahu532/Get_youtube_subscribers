const chaiHttp = require("chai-http")
const chai= require("chai");
const app = require("../src/app");
 

chai.should()
chai.use(chaiHttp); 

describe('YouTube subcriber', () =>{
  
  // test the get route
  describe('GET/subscribers', () =>{
    it('should GET all the subscribers', () =>{
      chai.request(app).get("/subscribers").end((err, response) =>{
        response.should.have.status(200);
        response.should.be.a('array');
       
      });
    });
    it('should NOT GET all the subscribers' , () =>{
      chai.request(app).get("/subscribers").end((err, response) => {
        response.should.have.status(500);
      });
    })

  })
});
