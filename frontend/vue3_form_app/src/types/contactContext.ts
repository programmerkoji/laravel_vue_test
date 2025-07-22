import type { Ref } from "vue";
import type { Contact } from "./contact";

export interface ContactContext {
  contacts: Ref<Contact[]>;
  selectedContact: Ref<Contact | null>;
  fetchAllContacts: () => Promise<void>;
  fetchContactDetail: (id: number) => Promise<void>;
}
