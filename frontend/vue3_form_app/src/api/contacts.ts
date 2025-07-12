import type { Contact } from "@/types/contact";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const fetchContacts = async () => {
  const res = await api.get<Contact[]>("/contact");
  return res.data;
};
