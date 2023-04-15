import * as listApi from "../../services/listApi";
import useAsync from "../useAsync";

export default function useList() {
  const {
    data: filterTech,
    loading: filterTechLoading,
    error: filterTechError,
    act: getFilterTech,
  } = useAsync((data) => listApi.getFilterTech(data), false);

  return {
    filterTech,
    filterTechLoading,
    filterTechError,
    getFilterTech,
  };
}
