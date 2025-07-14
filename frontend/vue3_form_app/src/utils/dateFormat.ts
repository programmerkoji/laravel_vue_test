import { format, parseISO } from "date-fns";

export function formatDate(datetime: string): string {
  if (!datetime) return "";
  return format(parseISO(datetime), "yyyy/MM/dd HH:mm");
}
