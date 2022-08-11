export default function generateSKU(): string {
  return Math.random().toString(36).substring(2, 12).toUpperCase();
}
