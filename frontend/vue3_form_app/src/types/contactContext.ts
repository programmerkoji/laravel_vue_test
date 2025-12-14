import type { Ref } from "vue";
import type { Contact } from "./contact";

export interface ContactContext {
  contacts: Ref<Contact[]>;
  selectedContact: Ref<Contact | null>;
  fetchAllContacts: () => Promise<void>;
  fetchContactDetail: (id: number) => Promise<Contact>;
  editContact: (
    id: number | null,
    data: Omit<Contact, "created_at" | "updated_at">
  ) => Promise<string>;
  delContact: (id: number) => Promise<string>;
}
