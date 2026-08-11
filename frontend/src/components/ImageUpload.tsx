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

	// Tracks whether a file is currently being dragged over the upload area.
	const [isDragging, setIsDragging] = useState(false);

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

	// Updates the selected image and resets the previous prediction.
	function handleSelectedFile(file: File | null) {
		// Clears the previous prediction before selecting a new image.
		onResetPrediction();

		// Clears any previous error.
		setError(null);

		setSelectedFile(file);
	}

	// Handles selecting a file from the file picker.
	function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
		handleSelectedFile(event.target.files?.[0] ?? null);
	}

	function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();

		setIsDragging(true);
	}

	// Removes the highlight when the dragged file leaves the upload area.
	function handleDragLeave() {
		setIsDragging(false);
	}

	// Handles dropping a file onto the upload area.
	function handleDrop(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();

		setIsDragging(false);

		const file = event.dataTransfer.files?.[0] ?? null;

		handleSelectedFile(file);
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
		<section
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			className={`
			group
			relative
			overflow-hidden
			rounded-3xl
			border-2
			border-dashed
			bg-white
			px-8
			py-6
			md:px-10
			md:py-8
			shadow-md
			transition-all
			duration-300
			hover:shadow-lg
		${
			isDragging
				? "border-turners-primary bg-red-50 scale-[1.01]"
				: "border-slate-200 hover:border-turners-primary"
		}
	`}
		>
			<div className="flex flex-col items-center justify-center">
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
						{/* Upload screen */}
						<div className="flex flex-col items-center">
							<div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
								<PhotoIcon className="h-10 w-10 text-turners-primary" />
							</div>

							<h2 className="mt-6 text-3xl font-bold text-slate-800">
								Upload your vehicle image
							</h2>

							<p className="mt-3 max-w-md text-center text-slate-500">
								Drag and drop your vehicle image here or browse
								from your computer.
							</p>

							<button
								type="button"
								onClick={() => fileInputRef.current?.click()}
								className="mt-8 rounded-button bg-turners-primary px-8 py-3 text-[15px] font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-turners-primary-hover hover:shadow-lg"
							>
								Browse Image
							</button>

							<p className="mt-4 text-sm text-slate-400">
								JPG • PNG • JPEG
							</p>
						</div>
					</>
				) : (
					<>
						{/* Preview screen */}
						<div className="flex w-full flex-col gap-6 lg:flex-row lg:items-stretch">
							<div className="flex w-full lg:w-1/2">
								<img
									src={previewUrl || ""}
									alt="Vehicle preview"
									className="h-full w-full rounded-2xl border border-slate-200 object-cover shadow-lg"
								/>
							</div>

							<div className="flex w-full flex-col justify-center gap-2 lg:w-1/2">
								<h2 className="text-2xl font-bold text-slate-800">
									Selected Vehicle
								</h2>

								<p className="mt-2 text-slate-500">
									Review your image before starting AI
									analysis.
								</p>

								<p className="mt-6 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
									📄 {selectedFile.name}
								</p>

								<div className="mt-8 flex flex-col gap-3 sm:flex-row">
									<button
										type="button"
										onClick={() =>
											fileInputRef.current?.click()
										}
										disabled={isLoading}
										className={`flex-1 rounded-button px-8 py-3 text-white transition ${
											isLoading
												? "cursor-not-allowed bg-slate-400"
												: "bg-turners-secondary hover:bg-turners-secondary-hover"
										}`}
									>
										Change Image
									</button>

									<button
										type="button"
										onClick={handleAnalyseVehicle}
										disabled={isLoading}
										className={`flex-1 rounded-button px-8 py-3 text-white transition ${
											isLoading
												? "cursor-not-allowed bg-slate-400"
												: "bg-turners-primary hover:bg-turners-primary-hover"
										}`}
									>
										{isLoading ? (
											<span className="flex items-center justify-center gap-2">
												<AiOutlineLoading3Quarters className="animate-spin" />
												Analysing...
											</span>
										) : (
											"Analyse Vehicle"
										)}
									</button>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default ImageUpload;
