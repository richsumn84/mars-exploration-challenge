'use strict';
const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname, './../doc/input.txt');

class IO {
	readFile() {
		const buffer = new Buffer(512);

		fs.open(inputFilePath, 'r', (err, fd) => {
			if (err) return console.error(err);

			fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
				if (err) return console.error(err);

				if (bytes > 0) console.log(buffer.slice(0, bytes).toString());
			});
		});
	}
}

module.exports = new IO();
