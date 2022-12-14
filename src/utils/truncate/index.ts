export function truncateText(text: string, MaxLength: number) {
  if (text.length <= MaxLength) {
    return text;
  }

  return `${text.slice(0, MaxLength)}...`;
}
