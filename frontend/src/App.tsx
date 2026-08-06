// Developer Note:
// Displays the main application layout.

import Header from "./components/Header";
import ImageUpload from "./components/ImageUpload";

function App() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-12">
        <Header />
        <ImageUpload />
      </div>
    </main>
  );
}

export default App;
