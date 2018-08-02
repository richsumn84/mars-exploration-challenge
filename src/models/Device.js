class Device {
	constructor(referencePoint, initialPosition, moves) {
		this.referencePoint = referencePoint;
		this.initialPosition = initialPosition;
		this.moves = moves;
	}

	get finalPosition() {
		this.calculateFinalPosition();
	}

	calculateFinalPosition() {
		console.log('calculate');
	}
}

module.exports = Device;
