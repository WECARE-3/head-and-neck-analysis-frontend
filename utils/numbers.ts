export const floatToPercent = (original: number): string => {
  return `${(original * 100).toFixed()}%`
}
