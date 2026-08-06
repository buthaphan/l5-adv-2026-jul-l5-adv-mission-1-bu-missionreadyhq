// Developer Note:
// Displays the main application layout.

function App() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-red-600">
            Turners AI Vehicle Inspector
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Identify a vehicle from a single image using AI.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-10 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-800">
            Upload Vehicle Image
          </h2>

          <p className="mt-2 text-slate-500">
            Drag and drop an image here, or browse your computer.
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
