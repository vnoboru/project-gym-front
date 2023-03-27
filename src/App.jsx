import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ExerciseProvider } from "./contexts/ExerciseContext";
import { ExercisePage, TechniquePage, TrainingPage } from "./pages";

function App() {
  return (
    <>
      <ToastContainer />
      <ExerciseProvider>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<TrainingPage />} />
            <Route path="/dashboard/technique" element={<TechniquePage />} />
            <Route path="/dashboard/exercise" element={<ExercisePage />} />
          </Routes>
        </Router>
      </ExerciseProvider>
    </>
  );
}

export default App;
