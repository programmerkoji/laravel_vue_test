import type { Contact } from "@/types/contact";
import type { InjectionKey, Ref } from "vue";

export const contactsInjectionKey: InjectionKey<Ref<Contact[]>> =
  Symbol("contacts");
export const selectedContactInjectionKey: InjectionKey<Ref<Contact | null>> =
  Symbol("selectedContact");
export const fetchContactDetailInjectionKey: InjectionKey<
  (id: number) => Promise<void>
> = Symbol("fetchContactDetail");
