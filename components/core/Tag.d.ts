import React from "react";
/** @startingPoint section="Components" subtitle="Toggleable filter chip" viewport="700x140" */
export interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}
export declare function Tag(props: TagProps): JSX.Element;
