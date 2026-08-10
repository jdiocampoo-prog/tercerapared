import React from "react";
/** @startingPoint section="Components" subtitle="Uppercase pill label / tag chip" viewport="700x160" */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: "lime" | "outline" | "sky" | "dark";
}
export declare function Badge(props: BadgeProps): JSX.Element;
