import { useState } from "react";

function ImageUpload() {
  // Stores the selected image file.
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Creates a temporary URL so the selected image can be displayed.
  const previewUrl = selectedFile ? URL.createObjectURL(selectedFile) : null;

  // Updates the selected image when the user chooses a file.
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  }

  return (
    <section className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-slate-800">
          Upload Vehicle Image
        </h2>

        <p className="mt-3 text-center text-slate-500">
          Choose a clear image of a vehicle for AI analysis.
        </p>

        {/* Displays a preview after an image has been selected. */}
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Vehicle preview"
            className="mt-6 h-72 w-3/5 rounded-xl object-cover shadow-md"
          />
        )}

        {/* Hidden file input triggered by the custom upload button. */}
        <input
          id="vehicle-image"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <p className="mt-4 rounded-lg bg-slate-100 px-4 py-2 text-sm text-slate-700">
            📷 {selectedFile.name}
          </p>
        )}

        <label
          htmlFor="vehicle-image"
          className="mt-8 cursor-pointer rounded-xl bg-red-600 px-8 py-3 font-medium text-white transition hover:bg-red-700"
        >
          {selectedFile ? "Change Image" : "Browse Image"}
        </label>
      </div>
    </section>
  );
}

export default ImageUpload;
