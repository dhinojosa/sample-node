const expect = require('chai').expect;
const divide = require('../src/sample.js').divide;

describe('testing division', () => {
   it ('canary test', () => {
      expect(true).to.be.eql(true);
   });

   it ('should divide 1 with 1', () => {
      expect(divide(1,1)).to.be.eql(1);
   });

   it('should divide -3 with -3', () => {
      expect(divide(-3, -3)).to.be.eql(1);
   });

   it('should handle exceptions', () => {
       expect(() => divide(4,0)).to.throw(Error, "Cannot divide by zero");
   });
});
