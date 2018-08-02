'use strict';
const io = require('./util/IO');
const split = require('./util/Split');

(async () => {
	try {
		const commands = await io.readFile();

		console.log(split.devices(commands));
	} catch (err) {
		throw err;
	}
})();
