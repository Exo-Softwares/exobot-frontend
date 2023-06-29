/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import { UseTransitionProps, animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const AnimatedWrapper = styled(animated.div)``

interface Animations {
  ease: UseTransitionProps<boolean>
  rightIn: UseTransitionProps<boolean>
}

interface AnimatedProps {
  state: boolean
  animation: keyof Animations
  children: ReactNode
  className?: string
}

const Animated = ({ state, children, animation, className }: AnimatedProps) => {
  const animations: Animations = {
    ease: {
      from: { x: 0, y: 400, opacity: 0 },
      enter: { x: 0, y: 0, opacity: 1 },
      leave: { x: 0, y: 400, opacity: 0 },
    },
    rightIn: {
      from: { x: 200, y: 0, opacity: 0 },
      enter: { x: 0, y: 0, opacity: 1 },
      leave: { x: 200, y: 0, opacity: 0 },
    },
  }

  const transitions = useTransition(state, animations[animation])

  return (
    <>
      {transitions(
        (style, item) =>
          item && (
            <AnimatedWrapper className={className} style={style}>
              {children}
            </AnimatedWrapper>
          ),
      )}
    </>
  )
}

export default Animated
