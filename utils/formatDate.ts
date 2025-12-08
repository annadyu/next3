import { format } from "date-fns";

export function formatDate(date: string | null | undefined) {
  if (!date) return "No date";

  const parsed = new Date(date);

  if (isNaN(parsed.getTime())) return "Noo date";

  return format(parsed, "dd MMM, yyyy");
}

export default formatDate;
