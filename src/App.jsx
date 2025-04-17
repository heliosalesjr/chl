import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ToggleExample from "./pages/ToggleExample";
import LocalStorageExample from "./pages/LocalStorageExample";
import PreviousExample from "./pages/PreviousExample";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toggle" element={<ToggleExample />} />
          <Route path="/localstorage" element={<LocalStorageExample />} />
          <Route path="/previousExample" element={<PreviousExample />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
