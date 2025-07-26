import type { Contact } from "@/types/contact";
import api from "./api";

export const fetchContacts = async () => {
  const res = await api.get<Contact[]>("/contact");
  return res.data;
};

export const fetchContactById = async (id: number) => {
  const res = await api.get<Contact>(`/contact/${id}`);
  return res.data;
};

export const createContact = async (
  data: Omit<Contact, "id" | "created_at" | "updated_at">
) => {
  const res = await api.post<Contact>("/contact", data);
  return res.data.message;
};

export const updateContact = async (
  id: number,
  data: Omit<Contact, "created_at" | "updated_at">
) => {
  const res = await api.put<Contact>(`/contact/${id}`, data);
  return res.data.message;
};
