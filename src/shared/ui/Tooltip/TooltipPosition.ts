export const TooltipPosition = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
} as const;

export type TooltipPosition =
  (typeof TooltipPosition)[keyof typeof TooltipPosition];
