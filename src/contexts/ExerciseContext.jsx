import PropTypes from "prop-types";
import { createContext, useMemo } from "react";
import { toast } from "react-toastify";
import useExercises from "../hooks/api/useExercises";

const ExerciseContext = createContext();
export default ExerciseContext;

export function ExerciseProvider({ children }) {
  const { exercises, exercisesLoading, exercisesError, getExercises } = useExercises();

  if (exercisesLoading) {
    toast.info("Carregando...");
  }

  if (exercisesError) {
    toast.error("Não pode conectar ao servidor. Por favor, tente novamente mais tarde.");
  }

  const value = useMemo(
    () => ({
      getExercises,
      exercisesInfo: exercises,
      exercisesInfoError: exercisesError,
    }),
    [exercises, exercisesError],
  );

  return (
    <ExerciseContext.Provider value={value}>
      {exercisesLoading || exercisesError ? null : children}
    </ExerciseContext.Provider>
  );
}

ExerciseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
