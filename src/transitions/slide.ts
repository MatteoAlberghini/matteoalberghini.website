/* 
* [TRANSITION] Transition for slide supporting % values
*/
/* Imports */
import { cubicOut } from 'svelte/easing'

/* Slide function that supports % */
type TransitionSlideOptions = {
  delay?: number,
  duration?: number,
  easing?: (t: number) => number,
  x?: string,
  y?: string,
  opacity?: number,
}
export function slide(node: Element, options: TransitionSlideOptions = 
  {
    delay: 0,
    duration: 400,
    easing: cubicOut,
    x: '0',
    y: '0',
    opacity: 0,
  }
){
  /* style */
  const style: CSSStyleDeclaration = getComputedStyle(node)
  const targetOpacity: number = +style.opacity
  const transform: string = style.transform === 'none' ? '' : style.transform
  const od: number = targetOpacity * (1 - (options.opacity || 0))
  /* values  */
  let fixedX: number = 0
  let fixedY: number = 0
  /* x calculation */
  const matchX: RegExpMatchArray | null | undefined = options.x?.match(/([-\d.]+)(\D+)/)
  if (matchX) { fixedX = Number(matchX[1]) }
  /* y calculation */
  const matchY: RegExpMatchArray | null | undefined = options.y?.match(/([-\d.]+)(\D+)/)
  if (matchY) { fixedY = Number(matchY[1]) }
  console.log(fixedX, fixedY)
  /* return  */
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t: number, u: number) => 
    `
      transform: ${transform} translate(-${(1 - t) * fixedX}%, ${(1 - t) * fixedY}%);
      opacity: ${targetOpacity - (od * u)};
    `
  }
}