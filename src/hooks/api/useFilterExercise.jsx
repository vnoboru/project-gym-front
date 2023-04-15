import * as listApi from "../../services/listApi";
import useAsync from "../useAsync";

export default function useList() {
  const {
    data: filterExerc,
    loading: filterExercLoading,
    error: filterExercError,
    act: getFilterExerc,
  } = useAsync((data) => listApi.getFilterExerc(data), false);

  return {
    filterExerc,
    filterExercLoading,
    filterExercError,
    getFilterExerc,
  };
}
