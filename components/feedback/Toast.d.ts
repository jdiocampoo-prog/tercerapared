import React from "react";
/** @startingPoint section="Components" subtitle="Transient confirmation toast" viewport="700x120" */
export interface ToastProps {
  message: React.ReactNode;
  tone?: "default" | "success";
}
export declare function Toast(props: ToastProps): JSX.Element;
