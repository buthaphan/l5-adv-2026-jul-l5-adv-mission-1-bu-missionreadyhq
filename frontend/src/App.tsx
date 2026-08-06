// Developer Note:
// Displays the main application layout.

function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-red-600">
          Turners AI Vehicle Inspector
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Identify a vehicle from a single image using AI.
        </p>
      </div>
    </main>
  );
}

export default App;