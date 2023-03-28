import * as exercisesApi from "../../services/exercisesApi";
import useAsync from "../useAsync";

export default function useDeleteExercise() {
  const {
    loading: deleteExerciseLoading,
    error: deleteExerciseError,
    act: deleteExercise,
  } = useAsync((data) => exercisesApi.deleteExercise(data), false);

  return {
    deleteExerciseLoading,
    deleteExerciseError,
    deleteExercise,
  };
}
