import { useEffect, useRef, useState, type FC } from "react";
import type { TooltipPosition } from "./TooltipPosition";
import { createPortal } from "react-dom";
import { getTooltipRoot } from "./createTooltipContainer";
import styles from "./Tooltip.module.css";
import { calculateTooltipPosition } from "./calculateTooltipPosition";

interface ITooltipProps {
  text: string;
  position: TooltipPosition;
  children: React.ReactNode;
}

export const Tooltip: FC<ITooltipProps> = ({ text, position, children }) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const pos = calculateTooltipPosition({ triggerRef, position });
      if (pos) {
        setStyle({
          top: `${pos.top}px`,
          left: `${pos.left}px`,
        });
      }
    }
  }, [isVisible, position]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {isVisible &&
        createPortal(
          <div className={styles.tooltip} style={style}>
            {text}
          </div>,
          getTooltipRoot(),
        )}
    </div>
  );
};
