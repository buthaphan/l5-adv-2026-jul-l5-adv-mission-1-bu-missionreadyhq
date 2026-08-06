// Developer Note:
// Displays the main application layout.

import Header from "./components/Header";

function App() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-12">
        <Header />
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
