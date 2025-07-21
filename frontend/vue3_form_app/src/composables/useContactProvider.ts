import { fetchContactById, fetchContacts } from "@/api/contacts";
import type { Contact } from "@/types/contact";
import { onMounted, ref } from "vue";

export const useContactProvider = () => {
  const contacts = ref<Contact[]>([]);
  const selectedContact = ref<Contact | null>(null);

  const fetchAllContacts = async () => {
    try {
      contacts.value = await fetchContacts();
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  const fetchContactDetail = async (id: number) => {
    try {
      selectedContact.value = await fetchContactById(id);
    } catch (error) {
      console.error("Failed to fetch selectedContact:", error);
    }
  };

  return {
    contacts,
    fetchAllContacts,
    selectedContact,
    fetchContactDetail,
  };
};
