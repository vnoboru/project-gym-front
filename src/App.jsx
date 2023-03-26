import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RegisterData from "./pages/RegisterData";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<RegisterData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
