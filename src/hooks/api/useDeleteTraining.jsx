import * as trainingApi from "../../services/trainingApi";
import useAsync from "../useAsync";

export default function useDeleteTraining() {
  const {
    loading: deleteTrainingLoading,
    error: deleteTrainingError,
    act: deleteTraining,
  } = useAsync((data) => trainingApi.deleteTraining(data), false);

  return {
    deleteTrainingLoading,
    deleteTrainingError,
    deleteTraining,
  };
}
