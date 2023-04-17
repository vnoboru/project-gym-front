import PropTypes from "prop-types";
import { createContext, useMemo } from "react";
import { toast } from "react-toastify";
import useListAll from "../hooks/api/useListAll";

const ListContext = createContext();
export default ListContext;

export function ListProvider({ children }) {
  const { listAll, listAllLoading, listAllError, getListAll } = useListAll();

  if (listAllError) {
    toast.error("Não pode conectar ao servidor. Por favor, tente novamente mais tarde.");
  }

  const value = useMemo(
    () => ({
      getListAll,
      listInfo: listAll,
      listInfoError: listAllError,
    }),
    [listAll, listAllError],
  );

  return <ListContext.Provider value={value}>{listAllLoading || listAllError ? null : children}</ListContext.Provider>;
}

ListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
