import PropTypes from "prop-types";
import { createContext, useMemo } from "react";
import { toast } from "react-toastify";
import useTechnique from "../hooks/api/useTechnique";

const TechniqueContext = createContext();
export default TechniqueContext;

export function TechniqueProvider({ children }) {
  const { technique, techniqueLoading, techniqueError, getTechnique } = useTechnique();

  if (techniqueError) {
    toast.error("Não pode conectar ao servidor. Por favor, tente novamente mais tarde.");
  }

  const value = useMemo(
    () => ({
      getTechnique,
      techniqueInfo: technique,
      techniqueInfoError: techniqueError,
    }),
    [technique, techniqueError],
  );

  return (
    <TechniqueContext.Provider value={value}>
      {techniqueLoading || techniqueError ? null : children}
    </TechniqueContext.Provider>
  );
}

TechniqueProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
