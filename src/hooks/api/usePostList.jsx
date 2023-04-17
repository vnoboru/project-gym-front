import * as listApi from "../../services/listApi";
import useAsync from "../useAsync";

export default function usePostList() {
  const {
    loading: postListLoading,
    error: postListError,
    act: postList,
  } = useAsync((data) => listApi.postList(data), false);

  return {
    postListLoading,
    postListError,
    postList,
  };
}
