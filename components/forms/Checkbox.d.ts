import React from "react";
/** @startingPoint section="Components" subtitle="Lime-filled checkbox" viewport="700x120" */
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
