// Displays the AI vehicle prediction returned by the backend.

import type { ReactNode } from "react";
import type { VehiclePrediction } from "../types/vehiclePrediction";

type PredictionCardProps = {
	prediction: VehiclePrediction | null;
};

type DetailRowProps = {
	label: string;
	value: ReactNode;
};

// Displays a single prediction field.
function DetailRow({ label, value }: DetailRowProps) {
	return (
		<div className="flex items-center justify-between border-b border-slate-100 py-3 last:border-b-0">
			<span className="text-sm font-medium text-slate-700">{label}</span>

			<span className="font-semibold text-slate-800">
				{value ?? "Not available"}
			</span>
		</div>
	);
}

// Displays the AI prediction returned from the backend.
function PredictionCard({ prediction }: PredictionCardProps) {
	// Don't render the card until a prediction exists.
	if (!prediction) {
		return null;
	}

	return (
		<section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
			<h2 className="text-2xl font-semibold text-slate-800">
				Vehicle Prediction
			</h2>

			<div className="mt-6">
				<DetailRow
					label="Vehicle Type"
					value={prediction.vehicleType}
				/>

				<DetailRow label="Make" value={prediction.make} />

				<DetailRow label="Model" value={prediction.model} />

				<DetailRow
					label="Confidence"
					value={
						<span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
							{(prediction.confidence * 100).toFixed(1)}%
						</span>
					}
				/>
			</div>
			{prediction.reason && (
				<div className="mt-8 rounded-xl border-l-4 border-turners-primary bg-slate-50 p-5">
					<h3 className="mb-3 text-base font-semibold text-slate-800">
						AI Reasoning
					</h3>

					<p className="leading-7 text-slate-700">
						{prediction.reason}
					</p>
				</div>
			)}
		</section>
	);
}

export default PredictionCard;
