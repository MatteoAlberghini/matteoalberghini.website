/* 
* [TYPE] Type definition for various atoms 
*/
/* Imports */
import type { Color } from "../common/colors.types"

/* General */
export type AtomType = 'primary' | 'secondary'

/* Colors */
export const MapTypeToPrimaryColor: Record<AtomType, Color> = {
  'primary': 'var(--main-secondary)',
  'secondary': 'var(--main-tertiary)',
}
export const MapTypeToSecondaryColor: Record<AtomType, Color> = {
  'primary': 'var(--main-primary)',
  'secondary': 'var(--main-secondary)',
}