'use strict';
const io = require('./util/IO');
const split = require('./util/Split');

(async () => {
	try {
		const commands = await io.readFile();

		const devices = split.devices(commands);

		devices.map((device) => {
			console.log(device.finalPosition);
		});
	} catch (err) {
		throw err;
	}
})();
