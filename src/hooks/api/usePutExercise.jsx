import * as exercisesApi from "../../services/exercisesApi";
import useAsync from "../useAsync";

export default function usePutExercise() {
  const {
    loading: putExerciseLoading,
    error: putExerciseError,
    act: putExercise,
  } = useAsync((data) => exercisesApi.putExercise(data, data.id), false);

  return {
    putExerciseLoading,
    putExerciseError,
    putExercise,
  };
}
