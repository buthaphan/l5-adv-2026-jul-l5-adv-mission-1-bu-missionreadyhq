// Defines the shared vehicle prediction type
// returned by the backend API.

export type VehiclePrediction = {
	vehicleType: string;
	make: string | null;
	model: string | null;
	confidence: number;
	reason: string;
};
