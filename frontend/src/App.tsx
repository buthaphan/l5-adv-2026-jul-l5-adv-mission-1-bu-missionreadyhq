import { useState } from "react";
import Header from "./components/Header";
import ImageUpload from "./components/ImageUpload";
import PredictionCard from "./components/PredictionCard";
import type { VehiclePrediction } from "./types/vehiclePrediction";

function App() {
  // Stores the AI prediction returned by the backend.
  const [prediction, setPrediction] = useState<VehiclePrediction | null>(null);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-12">
        <Header />
        <ImageUpload onPredictionReceived={setPrediction} />
        <PredictionCard prediction={prediction} />
      </div>
    </main>
  );
}

export default App;
