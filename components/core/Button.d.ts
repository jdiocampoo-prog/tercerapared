import React from "react";
/** @startingPoint section="Components" subtitle="Pill CTA button, 4 variants" viewport="700x220" */
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
export declare function Button(props: ButtonProps): JSX.Element;
