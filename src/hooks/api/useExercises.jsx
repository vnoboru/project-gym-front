import * as exercisesApi from "../../services/exercisesApi";
import useAsync from "../useAsync";

export default function useExercises() {
  const {
    data: exercises,
    loading: exercisesLoading,
    error: exercisesError,
    act: getExercises,
  } = useAsync(() => exercisesApi.getExercises());

  return {
    exercises,
    exercisesLoading,
    exercisesError,
    getExercises,
  };
}
