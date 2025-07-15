import type { Contact } from "@/types/contact";
import type { InjectionKey, Ref } from "vue";

export const contactsInjectionKey: InjectionKey<Ref<Contact[]>> =
  Symbol("contacts");
