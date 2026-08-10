import React from "react";
/** @startingPoint section="Components" subtitle="Surface container, subtle border + shadow" viewport="700x220" */
export interface CardProps {
  children: React.ReactNode;
  padding?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
