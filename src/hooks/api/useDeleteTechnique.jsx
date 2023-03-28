import * as techniqueApi from "../../services/techniqueApi";
import useAsync from "../useAsync";

export default function useDeleteTechnique() {
  const {
    loading: deleteTechniqueLoading,
    error: deleteTechniqueError,
    act: deleteTechnique,
  } = useAsync((data) => techniqueApi.deleteTechnique(data), false);

  return {
    deleteTechniqueLoading,
    deleteTechniqueError,
    deleteTechnique,
  };
}
