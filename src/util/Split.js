'use strict';
const Device = require('./../models/Device');

const devices = commands => {
	const referencePoint = commands[0];

	let devices = [];
	
	for (let index = 1; index < commands.length; index++) {
		const firstEntry = commands[index];
		const secondEntry = commands[index + 1];
		devices.push(new Device(referencePoint, firstEntry, secondEntry));
		index++;
	}

	return devices;
};

module.exports = { devices };
