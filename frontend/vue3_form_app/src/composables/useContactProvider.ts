import {
  createContact,
  deleteContact,
  fetchContactById,
  fetchContacts,
  updateContact,
} from "@/api/contacts";
import type { Contact } from "@/types/contact";
import type { ContactContext } from "@/types/contactContext";
import { inject, provide, ref, type InjectionKey } from "vue";

const contacts = ref<Contact[]>([]);
const selectedContact = ref<Contact | null>(null);

const fetchAllContacts = async () => {
  contacts.value = await fetchContacts();
};

const fetchContactDetail = async (id: number) => {
  const contact = await fetchContactById(id);
  selectedContact.value = contact;
  return contact;
};

const editContact = async (
  id: number | null,
  data: Omit<Contact, "created_at" | "updated_at">
) => {
  let message;
  if (id) {
    message = await updateContact(id, data);
  } else {
    message = await createContact(data);
  }
  await fetchAllContacts();
  return message;
};

const delContact = async (id: number) => {
  const message = await deleteContact(id);
  await fetchAllContacts();
  return message;
};

// Infection Key
export const contactInjectionKey: InjectionKey<ContactContext> =
  Symbol("ContactProvider");

export const provideContact = () => {
  provide(contactInjectionKey, {
    contacts,
    selectedContact,
    fetchAllContacts,
    fetchContactDetail,
    editContact,
    delContact,
  });
};

export const useContactProvider = () => {
  const context = inject(contactInjectionKey);
  if (!context) throw new Error("contactProvider is missing");
  return context;
};
