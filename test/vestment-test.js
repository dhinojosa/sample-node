const expect = require('chai').expect;
const properAttire = require('../src/vestment.js').properAttire;
const weather = require('../src/weather.js');
const sandbox = require('sinon').sandbox;

var sb;

beforeEach(() => {
    sb = sandbox.create();
});

describe('given a cold city is should return coat', () => {
    it('should return ensure that sinon is working', () => {
        sb.stub(weather, 'getTemperature').returns(25);
        expect(weather.getTemperature("Foo")).to.be.eql(25);
    });
    it('should take a city like Minnesota and return coat', () => {
        sb.stub(weather, 'getTemperature').returns(25);
        expect(properAttire('Minnesota')).to.be.eql('Coat');
    });
});

afterEach(() => {
    sb.restore();
});
