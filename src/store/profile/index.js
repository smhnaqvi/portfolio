import { useState, createContext, useEffect } from "react";
import Request from "../../apis/index";

export const ProfileContext = new createContext();
ProfileContext.displayName = "ProfileData";

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    if (profile === undefined) {
      getProfile();
    }
  }, [profile]);

  const getProfile = () => {
    Request.getGitHubProfile()
      .then(({ data }) => {
        setProfile(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
