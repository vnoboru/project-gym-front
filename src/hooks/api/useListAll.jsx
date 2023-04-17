import * as listApi from "../../services/listApi";
import useAsync from "../useAsync";

export default function useList() {
  const {
    data: listAll,
    loading: listAllLoading,
    error: listALlError,
    act: getAllList,
  } = useAsync(() => listApi.getAllList());

  return {
    listAll,
    listAllLoading,
    listALlError,
    getAllList,
  };
}
