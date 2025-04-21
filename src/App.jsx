import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ToggleExample from "./pages/ToggleExample";
import LocalStorageExample from "./pages/LocalStorageExample";
import PreviousExample from "./pages/PreviousExample";
import FetchExample from "./pages/FetchExample";
import EventListenerExample from "./pages/EventListenerExample";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toggle" element={<ToggleExample />} />
          <Route path="/localstorage" element={<LocalStorageExample />} />
          <Route path="/previousexample" element={<PreviousExample />} />
          <Route path="/fetch" element={<FetchExample />} />
          <Route path="/eventlistener" element={<EventListenerExample />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
