import * as listApi from "../../services/listApi";
import useAsync from "../useAsync";

export default function useList() {
  const {
    data: list,
    loading: listLoading,
    error: listError,
    act: getList,
  } = useAsync((data) => listApi.getList(data), false);

  return {
    list,
    listLoading,
    listError,
    getList,
  };
}
