const assert = require('assert');
const Device = require('./../src/models/Device');

describe('Device 1', () => {
	describe('Starts at 1 2 N', () => {
		it('should return 1 3 N', () => {
			assert.equal('1 3 N', new Device('5 5', '1 2 N', 'LMLMLMLMM').finalPosition);
		});
	});
});

describe('Device 2', () => {
	describe('Starts at 3 3 E', () => {
		it('should return 5 1 E', () => {
			assert.equal('5 1 E', new Device('5 5', '3 3 E', 'MMRMMRMRRM').finalPosition);
		});
	});
});
