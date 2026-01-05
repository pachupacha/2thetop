export const yearsSince = (d, r = new Date()) => {
  if (!(d instanceof Date)) return false

  if (!(r instanceof Date)) return false

  const differenceDates = r.getTime() - d.getTime()

  const msToYears = 1000 * 60 * 60 * 24 * 365

  const YearsDiff = Math.floor(differenceDates / msToYears)

  return Math.sign(differenceDates) === -1
    ? `${Math.abs(YearsDiff)} Years Left to Year ${r.getFullYear()}`
    : `${Math.abs(YearsDiff)} Years have passed since Year ${r.getFullYear()}`
}
