class Device {
	constructor(referencePoint, initialPosition, moves) {
		this.referencePoint = referencePoint;
		this.initialPosition = initialPosition;
		this.moves = moves;
	}

	get finalPosition() {
		return this.calculateFinalPosition();
	}

	calculateFinalPosition() {
		const initial = this.initialPosition.split(' ');
		let x = parseInt(initial[0]);
		let y = parseInt(initial[1]);
		let compassDirection = initial[2];
		const characters = this.moves.split('');

		characters.map((char) => {
			const left = char === 'L';
			const move = char === 'M';

			switch (compassDirection) {
			case 'N':
				if (move) y += 1;
				else {
					if (left) compassDirection = 'W';
					else compassDirection = 'E';
				}
				break;
			case 'E':
				if (move) x += 1;
				else {
					if (left) compassDirection = 'N';
					else compassDirection = 'S';
				}
				break;
			case 'S':
				if (move) y -= 1;
				else {
					if (left) compassDirection = 'E';
					else compassDirection = 'W';
				}
				break;
			case 'W':
				if (move) x -= 1;
				else {
					if (left) compassDirection = 'S';
					else compassDirection = 'N';
				}
				break;
			}
		});
		return `${x} ${y} ${compassDirection}`;
	}
}

module.exports = Device;
