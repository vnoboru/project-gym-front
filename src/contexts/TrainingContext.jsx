import PropTypes from "prop-types";
import { createContext, useMemo } from "react";
import { toast } from "react-toastify";
import useTraining from "../hooks/api/useTraining";

const TrainingContext = createContext();
export default TrainingContext;

export function TrainingProvider({ children }) {
  const { training, trainingLoading, trainingError, getTraining } = useTraining();

  if (trainingError) {
    toast.error("Não pode conectar ao servidor. Por favor, tente novamente mais tarde.");
  }

  const value = useMemo(
    () => ({
      getTraining,
      trainingInfo: training,
      trainingInfoError: trainingError,
    }),
    [training, trainingError],
  );

  return (
    <TrainingContext.Provider value={value}>
      {trainingLoading || trainingError ? null : children}
    </TrainingContext.Provider>
  );
}

TrainingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
