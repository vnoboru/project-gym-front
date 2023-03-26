import * as exercisesApi from "../../services/exercisesApi";
import useAsync from "../useAsync";

export default function usePostExercise() {
  const {
    loading: postExerciseLoading,
    error: postExerciseError,
    act: postExercise,
  } = useAsync((data) => exercisesApi.postExercise(data), false);

  return {
    postExerciseLoading,
    postExerciseError,
    postExercise,
  };
}
