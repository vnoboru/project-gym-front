import * as techniqueApi from "../../services/techniqueApi";
import useAsync from "../useAsync";

export default function usePostTechnique() {
  const {
    loading: postTechniqueLoading,
    error: postTechniqueError,
    act: postTechnique,
  } = useAsync((data) => techniqueApi.postTechnique(data), false);

  return {
    postTechniqueLoading,
    postTechniqueError,
    postTechnique,
  };
}
