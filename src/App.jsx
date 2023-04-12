import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./assets/styles/reset";
import { ExerciseProvider } from "./contexts/ExerciseContext";
import { ListProvider } from "./contexts/ListContext";
import { TechniqueProvider } from "./contexts/TechniqueContext";
import { TrainingProvider } from "./contexts/TrainingContext";
import { UserProvider } from "./contexts/UserContext";
import { ExercisePage, TechniquePage, TrainingPage } from "./pages";
import { DashboardPage } from "./pages/DashBoardPage";
import Enroll from "./pages/Enroll";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <ListProvider>
        <UserProvider>
          <TrainingProvider>
            <TechniqueProvider>
              <ExerciseProvider>
                <Router>
                  <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/enroll" element={<Enroll />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/dashboard/training" element={<TrainingPage />} />
                    <Route path="/dashboard/technique" element={<TechniquePage />} />
                    <Route path="/dashboard/exercise" element={<ExercisePage />} />
                  </Routes>
                </Router>
              </ExerciseProvider>
            </TechniqueProvider>
          </TrainingProvider>
        </UserProvider>
      </ListProvider>
    </>
  );
}

export default App;
