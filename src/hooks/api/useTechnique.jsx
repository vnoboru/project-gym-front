import * as techniqueApi from "../../services/techniqueApi";
import useAsync from "../useAsync";

export default function useTechnique() {
  const {
    data: technique,
    loading: techniqueLoading,
    error: techniqueError,
    act: getTechnique,
  } = useAsync(() => techniqueApi.getTechnique());

  return {
    technique,
    techniqueLoading,
    techniqueError,
    getTechnique,
  };
}
