import * as techniqueApi from "../../services/techniqueApi";
import useAsync from "../useAsync";

export default function usePutTechnique() {
  const {
    loading: putTechniqueLoading,
    error: putTechniqueError,
    act: putTechnique,
  } = useAsync((data) => techniqueApi.putTechnique(data, data.id), false);

  return {
    putTechniqueLoading,
    putTechniqueError,
    putTechnique,
  };
}
