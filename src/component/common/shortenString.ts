export function shortenString(
  str: string,
  startLength: number = 4,
  endLength: number = 4
): string {
  if (str?.length <= startLength + endLength) {
    return str;
  }
  const start = str?.slice(0, startLength);
  const end = str?.slice(-endLength);
  return `${start}...${end}`;
}
