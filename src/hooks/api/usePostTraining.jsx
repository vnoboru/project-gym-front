import * as trainingApi from "../../services/trainingApi";
import useAsync from "../useAsync";

export default function usePostTraining() {
  const {
    loading: postTrainingLoading,
    error: postTrainingError,
    act: postTraining,
  } = useAsync((data) => trainingApi.postTraining(data), false);

  return {
    postTrainingLoading,
    postTrainingError,
    postTraining,
  };
}
