import { createContext } from "react";
export const ConfigContext = createContext({ value: 1 });

export interface Menu {
  key: String;
  id: String;
  customContent: String;
  operation?: Array<optTypeItemProps>;
}

export interface theadItemProps {
  prop: String;
  label?: String;
  formatType?: String;
  operation?: String;
}

export interface optTypeItemProps {
  event: String;
  text: String;
  type: String;
}

export interface optTypeProps {
  [index: string]: optTypeItemProps;
}

export interface operateConfigProps {
  optFunc: Function;
  optType: optTypeProps;
}

export interface BetterTableProps {
  thead: Array<theadItemProps>;
  operateConfig: operateConfigProps;
  toRefreshList: Boolean;
  firstslot: any;
  emitClick:Function
}
