export const convertTempFToC = (n) => {
  const toCelcius = (n - 32) * 0.555
  return toCelcius
}

const convertTempCToF = (n) => {
  const toFarenheit = n * 1.8 + 32
  return toFarenheit
}
