import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Read />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
