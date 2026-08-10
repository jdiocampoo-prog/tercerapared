import React from "react";
/** @startingPoint section="Components" subtitle="Toggle switch" viewport="700x120" */
export interface SwitchProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
}
export declare function Switch(props: SwitchProps): JSX.Element;
