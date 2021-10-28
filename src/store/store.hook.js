import React from "react";
import { StoreContext } from "./index";

export default function useStore() {
  const store = React.useContext(StoreContext);
  if (store === undefined) {
    throw new Error("useStore must be used within StoreContext");
  }
  return store;
}
