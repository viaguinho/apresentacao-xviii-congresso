'use client';

import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CONSTANTS = {
  itemSize: 48,
  containerSize: 250,
  openStagger: 0.02,
  closeStagger: 0.07
};

export const STYLES: Record<string, Record<string, string>> = {
  trigger: {
    container:
      'rounded-full flex items-center bg-foreground justify-center cursor-pointer outline-none ring-0 hover:brightness-125 transition-all duration-100 z-50',
    active: 'bg-foreground'
  },
  item: {
    container:
      'rounded-full flex items-center justify-center absolute bg-muted hover:bg-muted/50 cursor-pointer',
    label: 'text-xs text-foreground absolute top-full left-1/2 -translate-x-1/2 mt-1'
  }
};

export const pointOnCircle = (
  i: number,
  n: number,
  r: number | { rx: number; ry: number },
  cx = 0,
  cy = 0
) => {
  const theta = (2 * Math.PI * i) / n - Math.PI / 2;
  const rx = typeof r === 'number' ? r : r.rx;
  const ry = typeof r === 'number' ? r : r.ry;
  const x = cx + rx * Math.cos(theta);
  const y = cy + ry * Math.sin(theta);
  return { x, y };
};

export interface CircleMenuItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  sublabel?: string;
  badge?: string;
  color?: string;
  className?: string;
  targetX?: number;
  targetY?: number;
  customContent?: React.ReactNode;
  [key: string]: any;
}

export interface MenuItemProps {
  icon?: React.ReactNode;
  label: string;
  href?: string;
  index: number;
  totalItems: number;
  isOpen: boolean;
  containerRadius?: number | { rx: number; ry: number };
  itemSize?: number;
  children?: React.ReactNode;
  onClick?: () => void;
  renderItem?: (item: CircleMenuItem, index: number, isOpen: boolean) => React.ReactNode;
  itemData?: CircleMenuItem;
}

export const MenuItem = ({
  icon,
  label,
  href,
  index,
  totalItems,
  isOpen,
  containerRadius = CONSTANTS.containerSize / 2,
  itemSize = CONSTANTS.itemSize,
  children,
  onClick,
  renderItem,
  itemData
}: MenuItemProps) => {
  const calculatedPos = pointOnCircle(index, totalItems, containerRadius);
  const x = itemData?.targetX !== undefined ? itemData.targetX : calculatedPos.x;
  const y = itemData?.targetY !== undefined ? itemData.targetY : calculatedPos.y;
  const [hovering, setHovering] = useState(false);

  const innerContent = renderItem && itemData ? (
    renderItem(itemData, index, isOpen)
  ) : children ? (
    children
  ) : itemData?.customContent ? (
    itemData.customContent
  ) : (
    <div
      style={{
        height: itemSize - 2,
        width: itemSize - 2
      }}
      className={cn(STYLES.item.container, 'relative')}
    >
      {icon}
      {hovering && <p className={STYLES.item.label}>{label}</p>}
    </div>
  );

  const content = (
    <motion.div
      animate={{
        x: isOpen ? x : 0,
        y: isOpen ? y : 0,
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.4
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.15,
          delay: 0
        }
      }}
      transition={{
        delay: isOpen ? index * CONSTANTS.openStagger : index * CONSTANTS.closeStagger,
        type: 'spring',
        stiffness: 280,
        damping: 24
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none'
      }}
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="pointer-events-auto flex items-center justify-center"
        style={{
          transform: 'translate(-50%, -50%)'
        }}
      >
        {innerContent}
      </div>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
};

export interface MenuTriggerProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  itemsLength: number;
  closeAnimationCallback: () => void;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  triggerSize?: number;
  customTrigger?: React.ReactNode;
}

export const MenuTrigger = ({
  setIsOpen,
  isOpen,
  itemsLength,
  closeAnimationCallback,
  openIcon,
  closeIcon,
  triggerSize = CONSTANTS.itemSize,
  customTrigger
}: MenuTriggerProps) => {
  const animate = useAnimationControls();

  const scaleTransition = Array.from({ length: Math.max(1, itemsLength - 1) })
    .map((_, index) => index + 1)
    .reduce((acc, _, index) => {
      const increasedValue = index * 0.15;
      acc.push(1 + increasedValue);
      return acc;
    }, [] as number[]);

  const closeAnimation = async () => {
    if (customTrigger) return;
    for (let i = 0; i < scaleTransition.length; i++) {
      await animate.start({
        height: Math.min(
          triggerSize * scaleTransition[i],
          triggerSize + triggerSize / 2
        ),
        width: Math.min(
          triggerSize * scaleTransition[i],
          triggerSize + triggerSize / 2
        ),
        transition: {
          duration: CONSTANTS.closeStagger / 2,
          ease: 'linear'
        }
      });
      if (i !== scaleTransition.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, CONSTANTS.closeStagger * 1000));
      }
    }

    animate.start({
      height: triggerSize,
      width: triggerSize,
      transition: {
        duration: 0.1,
        ease: 'backInOut'
      }
    });
  };

  const isInitialMount = React.useRef(true);
  const prevOpenRef = React.useRef(isOpen);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevOpenRef.current = isOpen;
      return;
    }
    if (prevOpenRef.current && !isOpen) {
      closeAnimationCallback();
      if (!customTrigger) {
        closeAnimation();
      }
    }
    prevOpenRef.current = isOpen;
  }, [isOpen, customTrigger]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (customTrigger) {
    return (
      <div className="z-20 cursor-pointer select-none" onClick={handleToggle}>
        {customTrigger}
      </div>
    );
  }

  return (
    <div className="z-50">
      <motion.button
        animate={animate}
        style={{
          height: triggerSize,
          width: triggerSize
        }}
        className={cn(STYLES.trigger.container, isOpen && STYLES.trigger.active)}
        onClick={handleToggle}
      >
        <AnimatePresence mode="popLayout">
          {isOpen ? (
            <motion.span
              key="menu-close"
              initial={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)'
              }}
              exit={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              transition={{
                duration: 0.2
              }}
            >
              {closeIcon}
            </motion.span>
          ) : (
            <motion.span
              key="menu-open"
              initial={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)'
              }}
              exit={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              transition={{
                duration: 0.2
              }}
            >
              {openIcon}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export interface CircleMenuProps {
  items: CircleMenuItem[];
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  containerSize?: number;
  containerRadius?: number | { rx: number; ry: number };
  itemSize?: number;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  customTrigger?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  renderItem?: (item: CircleMenuItem, index: number, isOpen: boolean) => React.ReactNode;
  showConnectors?: boolean;
  connectorColor?: string;
}

export const CircleMenu = ({
  items,
  openIcon = <Menu size={18} className="text-background" />,
  closeIcon = <X size={18} className="text-background" />,
  containerSize = CONSTANTS.containerSize,
  containerRadius,
  itemSize = CONSTANTS.itemSize,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onOpenChange,
  customTrigger,
  className,
  style,
  renderItem,
  showConnectors = false,
  connectorColor = 'rgba(107, 78, 131, 0.25)'
}: CircleMenuProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleSetIsOpen = (open: boolean) => {
    if (!isControlled) {
      setInternalIsOpen(open);
    }
    onOpenChange?.(open);
  };

  const animate = useAnimationControls();

  const closeAnimationCallback = async () => {
    await animate.start({
      rotate: -360,
      filter: 'blur(1px)',
      transition: {
        duration: CONSTANTS.closeStagger * (items.length + 2),
        ease: 'linear'
      }
    });
    await animate.start({
      rotate: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0
      }
    });
  };

  const radius = containerRadius ?? (containerSize / 2);

  return (
    <div
      style={{
        width: containerSize,
        height: containerSize,
        ...style
      }}
      className={cn("relative flex items-center justify-center place-self-center select-none", className)}
    >
      {/* Optional SVG connector lines radiating from center */}
      {showConnectors && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox={`0 0 ${containerSize} ${containerSize}`}
        >
          {items.map((_, index) => {
            const { x, y } = pointOnCircle(index, items.length, radius);
            const cx = containerSize / 2;
            const cy = containerSize / 2;
            const targetX = cx + x;
            const targetY = cy + y;
            return (
              <motion.line
                key={`connector-${index}`}
                x1={cx}
                y1={cy}
                x2={targetX}
                y2={targetY}
                stroke={connectorColor}
                strokeWidth={1.5}
                strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isOpen ? 0.8 : 0
                }}
                transition={{
                  duration: 0.35,
                  delay: isOpen ? index * CONSTANTS.openStagger : 0
                }}
              />
            );
          })}
        </svg>
      )}

      <MenuTrigger
        setIsOpen={handleSetIsOpen}
        isOpen={isOpen}
        itemsLength={items.length}
        closeAnimationCallback={closeAnimationCallback}
        openIcon={openIcon}
        closeIcon={closeIcon}
        triggerSize={itemSize}
        customTrigger={customTrigger}
      />

      <motion.div
        animate={animate}
        className="absolute inset-0 z-30 pointer-events-none"
      >
        {items.map((item, index) => {
          return (
            <div
              key={`menu-item-wrap-${index}`}
              className="absolute left-1/2 top-1/2 w-0 h-0 flex items-center justify-center pointer-events-auto"
            >
              <MenuItem
                itemData={item}
                icon={item.icon}
                label={item.label}
                href={item.href}
                onClick={item.onClick}
                index={index}
                totalItems={items.length}
                isOpen={isOpen}
                containerRadius={radius}
                itemSize={itemSize}
                renderItem={renderItem}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircleMenu;
