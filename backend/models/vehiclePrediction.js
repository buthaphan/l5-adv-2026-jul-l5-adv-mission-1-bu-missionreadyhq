// Developer Note:
// Represents the AI prediction returned after analysing a vehicle image.
// This model standardises the data structure used throughout the application.

class VehiclePrediction {
  constructor(vehicleType, make, model, confidence) {
    this.vehicleType = vehicleType;
    this.make = make;
    this.model = model;
    this.confidence = confidence;
  }
}

export default VehiclePrediction;
