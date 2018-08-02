'use strict';
const io = require('./util/IO');

(async () => {
	try {
		const commands = await io.readFile();

		const upperRightCorner = commands[0];

		let devices = [];

		for (let index = 1; index < commands.length; index++) {
			const firstEntry = commands[index];
			const secondEntry = commands[index + 1];
			const deviceInstruction = {
				initialPosition: firstEntry,
				moves: secondEntry
			};
			devices.push(deviceInstruction);
			index++;
		}
	} catch (err) {
		throw err;
	}
})();