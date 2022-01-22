export const isPrime = (num: number) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1
}

export const randomElement = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)]

export const dec2bin = (dec: number) => {
  return (dec >>> 0).toString(2)
}
