import { createContact, fetchContactById, fetchContacts } from "@/api/contacts";
import type { Contact } from "@/types/contact";
import type { ContactContext } from "@/types/contactContext";
import { inject, provide, ref, type InjectionKey } from "vue";

const contacts = ref<Contact[]>([]);
const selectedContact = ref<Contact | null>(null);

const fetchAllContacts = async () => {
  contacts.value = await fetchContacts();
};

const fetchContactDetail = async (id: number) => {
  selectedContact.value = await fetchContactById(id);
};

const addContact = async (
  data: Omit<Contact, "id" | "created_at" | "updated_at">
) => {
  const message = await createContact(data);
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
    addContact,
  });
};

export const useContactProvider = () => {
  const context = inject(contactInjectionKey);
  if (!context) throw new Error("contactProvider is missing");
  return context;
};
