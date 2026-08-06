// Developer Note:
// Represents the AI prediction returned after analysing a vehicle image.
// This model standardises the data structure used throughout the application.

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
