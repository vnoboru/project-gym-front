import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./assets/styles/reset";
import { ExerciseProvider } from "./contexts/ExerciseContext";
import { TechniqueProvider } from "./contexts/TechniqueContext";
import { TrainingProvider } from "./contexts/TrainingContext";
import { ExercisePage, TechniquePage, TrainingPage } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <TrainingProvider>
        <TechniqueProvider>
          <ExerciseProvider>
            <Router>
              <Routes>
                <Route path="/dashboard/training" element={<TrainingPage />} />
                <Route path="/dashboard/technique" element={<TechniquePage />} />
                <Route path="/dashboard/exercise" element={<ExercisePage />} />
              </Routes>
            </Router>
          </ExerciseProvider>
        </TechniqueProvider>
      </TrainingProvider>
    </>
  );
}

export default App;
