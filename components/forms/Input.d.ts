import React from "react";
/** @startingPoint section="Components" subtitle="Text field with label, lime focus ring" viewport="700x160" */
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function Input(props: InputProps): JSX.Element;
