import { flattenDeep } from "lodash";
import { configure, makeAutoObservable } from "mobx";

configure({ enforceActions: "never" });

export class LayoutStore {
  constructor() {
    makeAutoObservable(this);
  }

  setCollapsed = (isCollapsed) => {
    this.collapsed = isCollapsed;
    localStorage?.setItem("sidebar", `${isCollapsed}`);
  };
}
