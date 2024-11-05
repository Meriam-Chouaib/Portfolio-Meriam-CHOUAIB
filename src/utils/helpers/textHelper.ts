export const truncateText = ({
  text,
  maxLength,
}: {
  text: string
  maxLength: number
}) => {
  if (text.length <= maxLength) {
    return { truncated: text, isTruncated: false }
  }
  return {
    truncated: `${text.slice(0, maxLength)}...`,
    isTruncated: true,
  }
}
