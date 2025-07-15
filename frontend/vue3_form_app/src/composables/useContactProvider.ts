import { fetchContacts } from "@/api/contacts";
import type { Contact } from "@/types/contact";
import { onMounted, ref } from "vue";

export const useContactProvider = () => {
  const contacts = ref<Contact[]>([]);

  const showContactList = onMounted(async () => {
    try {
      contacts.value = await fetchContacts();
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  });

  return {
    contacts,
    showContactList,
  };
};
