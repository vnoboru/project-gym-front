import * as trainingApi from "../../services/trainingApi";
import useAsync from "../useAsync";

export default function usePutTraining() {
  const {
    loading: putTrainingLoading,
    error: putTrainingError,
    act: putTraining,
  } = useAsync((data) => trainingApi.putTraining(data, data.id), false);

  return {
    putTrainingLoading,
    putTrainingError,
    putTraining,
  };
}
