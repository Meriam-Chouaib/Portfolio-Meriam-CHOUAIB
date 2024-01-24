export const fileSizeToMb = (size: number, fixedNumber?: number) => {
  const sizeInMb = size / 1024 / 1024
  return sizeInMb > 0.01 ? sizeInMb.toFixed(fixedNumber || 0) : 0.01
}
