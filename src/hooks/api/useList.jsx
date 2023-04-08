import * as listApi from "../../services/listApi";
import useAsync from "../useAsync";

export default function useList() {
  const { data: list, loading: listLoading, error: listError, act: getList } = useAsync(() => listApi.getList());

  return {
    list,
    listLoading,
    listError,
    getList,
  };
}
