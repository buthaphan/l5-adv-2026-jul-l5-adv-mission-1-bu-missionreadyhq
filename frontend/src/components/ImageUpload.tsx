import { useState, useEffect, useRef } from "react";

import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PhotoIcon } from "@heroicons/react/24/outline";

import { analyseVehicle } from "../services/vehicleService";
import type { VehiclePrediction } from "../types/vehiclePrediction";

type ImageUploadProps = {
	onPredictionReceived: (prediction: VehiclePrediction) => void;
	onResetPrediction: () => void;
};

// Allows the component to send the prediction back to the parent.
function ImageUpload({
	onPredictionReceived,
	onResetPrediction,
}: ImageUploadProps) {
	// Stores the selected image file.
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	// Tracks whether the vehicle is currently being analysed.
	const [isLoading, setIsLoading] = useState(false);

	// Stores an error message if the analysis fails.
	const [error, setError] = useState<string | null>(null);

	// Stores the temporary URL used to preview the selected image.
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	// References the hidden file input so it can be opened from a button.
	const fileInputRef = useRef<HTMLInputElement>(null);

	// Create a temporary object URL for the selected image and
	// release it when the image changes or the component unmounts.
	useEffect(() => {
		if (!selectedFile) {
			setPreviewUrl(null);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);

		setPreviewUrl(objectUrl);

		return () => {
			URL.revokeObjectURL(objectUrl);
		};
	}, [selectedFile]);

	// Updates the selected image when the user chooses a file.
	function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0] ?? null;

		// Clears the previous prediction before selecting a new image.
		onResetPrediction();

		// Clears any previous error.
		setError(null);

		setSelectedFile(file);
	}

	// Sends the selected image to the backend for AI analysis.
	async function handleAnalyseVehicle() {
		if (!selectedFile || isLoading) {
			return;
		}

		// Clears any previous error before starting a new analysis.
		setError(null);

		setIsLoading(true);

		try {
			const result = await analyseVehicle(selectedFile);

			onPredictionReceived(result);
		} catch (error) {
			console.error("Vehicle analysis failed:", error);

			if (axios.isAxiosError(error)) {
				if (!error.response) {
					// The request never reached the server.
					setError(
						"Unable to connect to the server. Please try again later.",
					);
				} else {
					// The server returned an error.
					setError("Vehicle analysis failed. Please try again.");
				}
			} else {
				// Handles unexpected JavaScript errors.
				setError("An unexpected error occurred.");
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<section className="group relative overflow-hidden rounded-3xl border-2 border-dashed border-slate-200 bg-white px-6 py-4 md:px-6 md:py-4 shadow-lg transition-all duration-300 hover:border-turners-primary hover:shadow-lg">
			<div className="flex flex-col items-center justify-center">
				{!selectedFile && (
					<div className="flex flex-col items-center">
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
							<PhotoIcon className="h-10 w-10 text-turners-primary" />
						</div>

						<h3 className="mt-6 text-2xl font-bold text-slate-800">
							Upload your vehicle image
						</h3>

						<p className="mt-3 max-w-md text-center text-slate-500">
							Drag and drop your vehicle image here or browse from
							your computer.
						</p>
					</div>
				)}
				{/* Displays an error message if the analysis fails. */}
				{error && (
					<div className="mt-6 w-full rounded-button border border-red-200 bg-red-50 px-4 py-3 text-center text-red-700">
						{error}
					</div>
				)}

				<input
					ref={fileInputRef}
					id="vehicle-image"
					className="hidden"
					type="file"
					accept="image/*"
					onChange={handleFileChange}
				/>

				{!selectedFile ? (
					<>
						{/* Displays the upload button before an image is selected. */}
						<button
							type="button"
							onClick={() => fileInputRef.current?.click()}
							className="mt-8 rounded-button bg-turners-primary px-8 py-3 text-[15px] font-normal text-white transition hover:bg-turners-primary-hover"
						>
							Browse Images
						</button>
						<p className="mt-4 text-sm text-slate-400">
							Supports JPG, PNG and JPEG
						</p>
					</>
				) : (
					<>
						<h2 className="text-2xl font-semibold text-slate-800">
							Vehicle Preview
						</h2>
						{/* Displays the selected image preview. */}
						<img
							src={previewUrl || ""}
							alt="Vehicle preview"
							className="mt-6 h-72 w-3/5 rounded-button object-cover shadow-md"
						/>

						{/* Displays the selected filename. */}
						<p className="mt-4 rounded-lg bg-turners-background px-4 py-2 text-sm text-slate-700">
							📷 {selectedFile.name}
						</p>

						{/* Displays the available actions after an image has been selected. */}
						<div className="mt-6 flex gap-4">
							<button
								type="button"
								onClick={() => fileInputRef.current?.click()}
								disabled={isLoading}
								className={`rounded-button px-8 py-3 text-[15px] font-normal text-white transition ${
									isLoading
										? "cursor-not-allowed bg-slate-400"
										: "bg-turners-secondary hover:bg-turners-secondary-hover"
								}`}
							>
								Change Image
							</button>

							<button
								onClick={handleAnalyseVehicle}
								disabled={isLoading}
								className={`rounded-button px-8 py-3 text-[15px] font-normal text-white transition ${
									isLoading
										? "cursor-not-allowed bg-slate-400"
										: "bg-turners-primary hover:bg-turners-primary-hover"
								}`}
							>
								{isLoading ? (
									<span className="flex items-center gap-2">
										<AiOutlineLoading3Quarters className="animate-spin" />
										Analysing...
									</span>
								) : (
									"Analyse Vehicle"
								)}
							</button>
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default ImageUpload;
