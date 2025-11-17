import {
  createContext,
  useContext,
  useRef,
} from "react"
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react"

import { cn } from "@/lib/utils"
import styles from './StackingCards.module.css';

export default function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier,
  totalCards,
  ...props
}) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    ...scrollOptions,
    target: targetRef,
  })

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn(className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  )
}

const StackingCardItem = ({
  index,
  topPosition,
  className,
  children,
  ...props
}) => {
  const {
    progress,
    scaleMultiplier,
    totalCards = 0,
  } = useStackingCardsContext() // Get from Context
  const scaleTo = 1 - (totalCards - index) * (scaleMultiplier ?? 0.03)
  const rangeScale = [index * (1 / totalCards), 1]
  const scale = useTransform(progress, rangeScale, [1, scaleTo])
  const top = topPosition ?? `${5 + index * 3}%`

  return (
    <div className={cn(`h-full sticky`, styles.stickyTop50, className)} {...props}>
      <motion.div
        className={`origin-top relative h-full ${styles.stickyCard}`}
        style={{ top, scale }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const StackingCardsContext = createContext(null)

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext)
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards")
  return context
}

export { StackingCardItem }
