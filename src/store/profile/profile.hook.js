import React from "react";
import { ProfileContext } from "./index";

export default function useProfile() {
  const store = React.useContext(ProfileContext);
  if (store === undefined) {
    throw new Error("useProfile must be used within ProfileContext");
  }
  return store;
}
