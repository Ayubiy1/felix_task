import { configure, makeAutoObservable } from "mobx";
import queryString from "query-string";

import { RouterStoreInterface } from "@src/types";

import { usePickStore } from "@hooks/use-pick-store";

configure({ enforceActions: "never" });

export class RouterStore {
  query = {};
  // query: Record<string, any> = queryString.parse(document && document?.location.search);
  url = "";

  constructor() {
    makeAutoObservable(this);
  }

  setQuery = () => {
    this.query = query;
  };

  setUrl = () => {
    this.url = url;
  };

  setLocation = (query, url) => {
    console.log(11111, query, url);
    this.setQuery(query);
    this.setUrl(url);
  };
}

export const useRouterStore = () => usePickStore("routerStore");
