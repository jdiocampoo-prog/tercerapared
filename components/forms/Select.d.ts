import React from "react";
/** @startingPoint section="Components" subtitle="Dropdown field, same shell as Input" viewport="700x160" */
export interface SelectProps {
  label?: string;
  options?: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export declare function Select(props: SelectProps): JSX.Element;
