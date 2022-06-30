import "./App.css";
import Editor from "./components/Editor";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/doc/${uuid()}`} />} />
        <Route path="/doc/:id" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
