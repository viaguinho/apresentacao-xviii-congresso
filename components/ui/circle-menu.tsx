'use client';

import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const CONSTANTS = {
  itemSize: 48,
  containerSize: 250,
  openStagger: 0.02,
  closeStagger: 0.07
};

const STYLES: Record<string, Record<string, string>> = {
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

const pointOnCircle = (i: number, n: number, r: number, cx = 0, cy = 0) => {
  const theta = (2 * Math.PI * i) / n - Math.PI / 2;
  const x = cx + r * Math.cos(theta);
  const y = cy + r * Math.sin(theta) + 0;
  return { x, y };
};

export interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  index: number;
  totalItems: number;
  isOpen: boolean;
  containerRadius?: number;
  itemSize?: number;
  children?: React.ReactNode;
  onClick?: () => void;
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
  onClick
}: MenuItemProps) => {
  const { x, y } = pointOnCircle(index, totalItems, containerRadius);
  const [hovering, setHovering] = useState(false);

  const content = (
    <motion.div
      animate={{
        x: isOpen ? x : 0,
        y: isOpen ? y : 0,
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.4
      }}
      whileHover={{
        scale: 1.06,
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
        position: 'absolute'
      }}
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children ? (
        children
      ) : (
        <button
          style={{
            height: itemSize - 2,
            width: itemSize - 2
          }}
          className={STYLES.item.container}
        >
          {icon}
          {hovering && <p className={STYLES.item.label}>{label}</p>}
        </button>
      )}
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
  const shakeAnimation = useAnimationControls();

  const scaleTransition = Array.from({ length: Math.max(1, itemsLength - 1) })
    .map((_, index) => index + 1)
    .reduce((acc, _, index) => {
      const increasedValue = index * 0.15;
      acc.push(1 + increasedValue);
      return acc;
    }, [] as number[]);

  const closeAnimation = async () => {
    shakeAnimation.start({
      translateX: [0, 2, -2, 0, 2, -2, 0],
      transition: {
        duration: CONSTANTS.closeStagger,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop'
      }
    });
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

    shakeAnimation.stop();
    shakeAnimation.start({
      translateX: 0,
      transition: {
        duration: 0
      }
    });

    animate.start({
      height: triggerSize,
      width: triggerSize,
      transition: {
        duration: 0.1,
        ease: 'backInOut'
      }
    });
  };

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      closeAnimationCallback();
      closeAnimation();
    } else {
      setIsOpen(true);
    }
  };

  if (customTrigger) {
    return (
      <motion.div animate={shakeAnimation} className="z-50 cursor-pointer" onClick={handleToggle}>
        <motion.div animate={animate}>
          {customTrigger}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div animate={shakeAnimation} className="z-50">
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
    </motion.div>
  );
};

export interface CircleMenuProps {
  items: Array<{ label: string; icon: React.ReactNode; href?: string; onClick?: () => void }>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  containerSize?: number;
  itemSize?: number;
  defaultOpen?: boolean;
}

const CircleMenu = ({
  items,
  openIcon = <Menu size={18} className="text-background" />,
  closeIcon = <X size={18} className="text-background" />,
  containerSize = CONSTANTS.containerSize,
  itemSize = CONSTANTS.itemSize,
  defaultOpen = false
}: CircleMenuProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
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

  return (
    <div
      style={{
        width: containerSize,
        height: containerSize
      }}
      className="relative flex items-center justify-center place-self-center"
    >
      <MenuTrigger
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        itemsLength={items.length}
        closeAnimationCallback={closeAnimationCallback}
        openIcon={openIcon}
        closeIcon={closeIcon}
        triggerSize={itemSize}
      />
      <motion.div
        animate={animate}
        className={cn('absolute inset-0 z-0 flex items-center justify-center')}
      >
        {items.map((item, index) => {
          return (
            <MenuItem
              key={`menu-item-${index}`}
              icon={item.icon}
              label={item.label}
              href={item.href}
              onClick={item.onClick}
              index={index}
              totalItems={items.length}
              isOpen={isOpen}
              containerRadius={containerSize / 2}
              itemSize={itemSize}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export { CircleMenu, pointOnCircle };
