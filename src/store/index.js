import { useState, createContext, useEffect } from "react";
import Request from "../apis/index";

export const StoreContext = new createContext();
StoreContext.displayName = "AppStore";

const StoreProvider = ({ children }) => {
  const [data, setData] = useState(undefined);
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    if (profile === undefined) {
      getProfile();
    }
  }, []);

  const getProfile = () => {
    Request.getGitHubProfile()
      .then(({ data }) => {
        setProfile(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <StoreContext.Provider value={{ profile, data, setData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
