import PropTypes from "prop-types";
import { createContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("userData", {});

  const value = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData, setUserData],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
