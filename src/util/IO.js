'use strict';
const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname, './../doc/input.txt');

const readFile = () => {
	const buffer = new Buffer(512);

	return new Promise((resolve, reject) => {
		fs.open(inputFilePath, 'r', (err, fd) => {
			if (err) reject(err);

			fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
				if (err) reject(err);

				if (bytes > 0) {
					resolve(
						buffer
							.slice(0, bytes)
							.toString()
							.split('\n')
					);
				}
				resolve([]);
			});
		});
	});
};

module.exports = {readFile};
