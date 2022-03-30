import "./App.css";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>

    </div>
  );
}

export default App;
