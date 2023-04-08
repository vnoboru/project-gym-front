import PropTypes from "prop-types";
import { createContext, useMemo } from "react";
import { toast } from "react-toastify";
import useList from "../hooks/api/useList";

const ListContext = createContext();
export default ListContext;

export function ListProvider({ children }) {
  const { list, listLoading, listError, getList } = useList();

  if (listError) {
    toast.error("Não pode conectar ao servidor. Por favor, tente novamente mais tarde.");
  }

  const value = useMemo(
    () => ({
      getList,
      listInfo: list,
      listInfoError: listError,
    }),
    [list, listError],
  );

  return <ListContext.Provider value={value}>{listLoading || listError ? null : children}</ListContext.Provider>;
}

ListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
