import * as trainingApi from "../../services/trainingApi";
import useAsync from "../useAsync";

export default function useTraining() {
  const {
    data: training,
    loading: trainingLoading,
    error: trainingError,
    act: getTraining,
  } = useAsync(() => trainingApi.getTraining());

  return {
    training,
    trainingLoading,
    trainingError,
    getTraining,
  };
}
