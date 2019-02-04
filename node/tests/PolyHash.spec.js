const { PolyRand } = require('../../index.js');
const expect = require('chai').expect;

describe('PolyRand.bytes()', () => {
	it('should return the requested size', () => {
		const hash = PolyRand.bytes(32);
		expect(hash.length).to.equal(32);
	});
});

describe('PolyRand.hex()', () => {
	it('should return the requested size', () => {
		const hash = PolyRand.hex(64);
		expect(hash).to.match(/^[0-9A-F]{64}$/);
	});
});
