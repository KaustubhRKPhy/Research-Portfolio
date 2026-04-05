import React from "react";
import { AnimatePresence, motion, Transition, TargetAndTransition } from "framer-motion";

export interface RotatingTextProps {
  texts: string[];
  duration?: number;
  transition?: Transition;
  y?: number;
  containerClassName?: string;
  mainClassName?: string;
  staggerFrom?: "first" | "last";
  staggerDuration?: number;
  splitLevelClassName?: string;
  rotationInterval?: number;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  duration = 2000,
  transition = { duration: 0.3, ease: "easeOut" },
  y = -50,
  containerClassName = "",
  mainClassName = "",
  splitLevelClassName = "",
  rotationInterval,
  initial,
  animate,
  exit,
}) => {
  const [index, setIndex] = React.useState(0);
  const intervalDuration = rotationInterval ?? duration;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [texts, intervalDuration]);

  const currentText = texts[index];

  return (
    <div className={`inline-flex overflow-hidden ${containerClassName}`.trim()}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          transition={transition}
          initial={initial ?? { opacity: 0, y: -y }}
          animate={animate ?? { opacity: 1, y: 0 }}
          exit={exit ?? { opacity: 0, y }}
          className={`inline-block ${mainClassName}`.trim()}
        >
          <span className={`inline-block ${splitLevelClassName}`.trim()}>
            {currentText}
          </span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
