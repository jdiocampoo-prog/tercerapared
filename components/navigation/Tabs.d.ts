import React from "react";
export interface TabItem { label: string; content: React.ReactNode }
/** @startingPoint section="Components" subtitle="Underline tab bar, lime active state" viewport="700x220" */
export interface TabsProps {
  items: TabItem[];
  defaultActive?: number;
}
export declare function Tabs(props: TabsProps): JSX.Element;
