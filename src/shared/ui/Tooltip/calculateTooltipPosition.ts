import type { RefObject } from "react";
import type { TooltipPosition } from "./TooltipPosition";

interface ICalculateTooltipPositionParams {
  triggerRef: RefObject<HTMLDivElement | null>;
  position: TooltipPosition;
  offset?: number;
}
export const calculateTooltipPosition = ({
  triggerRef,
  position,
}: ICalculateTooltipPositionParams) => {
  if (!triggerRef.current) return;

  const rect = triggerRef.current.getBoundingClientRect();
  console.log(rect);

  switch (position) {
    case "top":
      return {
        top: rect.top - rect.height,
        left: rect.left + rect.width / 2,
      };
    case "bottom":
      return {
        top: rect.bottom + rect.height,
        left: rect.left + rect.width / 2,
      };
    case "left":
      return {
        top: rect.top + rect.height / 2,
        left: rect.left - rect.width,
      };
    case "right":
      return {
        top: rect.top + rect.height / 2,
        left: rect.right + rect.width,
      };
    default:
      return null;
  }
};
