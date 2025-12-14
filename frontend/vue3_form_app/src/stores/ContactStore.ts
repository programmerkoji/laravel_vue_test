import {
  createContact,
  deleteContact,
  fetchContactById,
  fetchContacts,
  updateContact,
} from "@/api/contacts";
import type { Contact } from "@/types/contact";
import { defineStore } from "pinia";
import { ref } from "vue";

type ContactUpsertPayload = Omit<Contact, "created_at" | "updated_at">;
type ContactCreatePayload = Omit<ContactUpsertPayload, "id">;

export const useContactStore = defineStore("contact", () => {
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

  const editContact = async (id: number | null, data: ContactUpsertPayload) => {
    let message: string;

    if (id != null && id > 0) {
      message = await updateContact(id, data);
    } else {
      const { id: _id, ...createPayload } = data;
      message = await createContact(createPayload as ContactCreatePayload);
    }

    await fetchAllContacts();
    return message;
  };

  const delContact = async (id: number) => {
    const message = await deleteContact(id);
    await fetchAllContacts();
    return message;
  };

  return {
    contacts,
    selectedContact,
    fetchAllContacts,
    fetchContactDetail,
    editContact,
    delContact,
  };
});
