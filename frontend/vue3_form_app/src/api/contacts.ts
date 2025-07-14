import type { Contact } from "@/types/contact";
import api from "./api";

export const fetchContacts = async () => {
  const res = await api.get<Contact[]>("/contact");
  return res.data;
};

export const createContact = async (
  data: Omit<Contact, "id" | "created_at" | "updated_at">
) => {
  const res = await api.post<Contact>("/contact", data);
  return res.data.message;
};
