import { enableStaticRendering } from "mobx-react";
import { FC, createContext, useContext } from "react";

import { LayoutStore } from "./layout-store";
import { RouterStore } from "./router-store";

// enableStaticRendering(typeof window === "undefined");

const getStores = () => {
  const layoutStore = new LayoutStore();
  const routerStore = new RouterStore();

  return {
    layoutStore,
    routerStore,
  };
};

const stores = getStores();

const StoreContext = createContext(stores);

const StoreProvider = ({ children }: { children: any }) => {
  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext);
};

export { getStores, StoreContext, StoreProvider, useStore };
