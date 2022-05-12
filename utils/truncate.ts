export default function truncate(str: string): string {
  return str.length > 20 ? str.substring(0, 20) + "..." : str;
}
