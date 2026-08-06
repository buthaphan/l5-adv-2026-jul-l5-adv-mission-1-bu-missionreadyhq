// Defines the structure of a vehicle prediction returned by the backend.

export type VehiclePrediction = {
  vehicleType: string;
  make: string | null;
  model: string | null;
  confidence: number;
  reason: string;
};
