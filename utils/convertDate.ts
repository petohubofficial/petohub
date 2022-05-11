export default function convertDate(dateString: Date): string {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toDateString() + " " + date.toLocaleTimeString();
}
