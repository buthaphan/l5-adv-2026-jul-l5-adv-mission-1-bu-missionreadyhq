import type { VehiclePrediction } from "../types/vehiclePrediction";

type PredictionCardProps = {
  prediction: VehiclePrediction | null;
};

// Displays the AI prediction returned from the backend.
function PredictionCard({ prediction }: PredictionCardProps) {
  if (!prediction) {
    return null;
  }

  return (
    <section className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-slate-800">
        Vehicle Prediction
      </h2>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-sm text-slate-500">Vehicle Type</p>
          <p className="text-lg font-semibold">{prediction.vehicleType}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Make</p>
          <p className="text-lg font-semibold">{prediction.make}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Model</p>
          <p className="text-lg font-semibold">{prediction.model}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Confidence</p>
          <p className="text-lg font-semibold">
            {(prediction.confidence * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </section>
  );
}

export default PredictionCard;
