//Represents the standard prediction model shared across
//all AI providers and the frontend.

class VehiclePrediction {
	constructor(vehicleType, make, model, confidence, reason) {
		this.vehicleType = vehicleType;
		this.make = make;
		this.model = model;
		this.confidence = confidence;
		this.reason = reason;
	}
}

export default VehiclePrediction;
