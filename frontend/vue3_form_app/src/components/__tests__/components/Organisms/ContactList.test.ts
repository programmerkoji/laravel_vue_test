import type { Contact } from "@/types/contact";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import ContactListVue from "@/components/Organisms/ContactList.vue";
import type { ContactContext } from "@/types/contactContext";
import { ref } from "vue";
import { contactInjectionKey } from "@/composables/useContactProvider";

describe("ContactList.vue", () => {
  const mockContacts = ref<Contact[]>([
    {
      id: 1,
      name: "テスト太郎",
      email: "test@test.com",
      message: "テストです。テストです",
      status: "1",
      created_at: "",
      updated_at: "",
    },
    {
      id: 2,
      name: "テスト02太郎",
      email: "test02@test.com",
      message: "テスト02です。テスト02です",
      status: "1",
      created_at: "",
      updated_at: "",
    },
  ]);

  const mockProvider: ContactContext = {
    contacts: mockContacts,
    selectedContact: ref(null),
    fetchAllContacts: vi.fn(),
    fetchContactDetail: vi.fn(),
    editContact: vi.fn(),
    delContact: vi.fn(),
  };

  it("contactsをinjectしてリストを表示する", () => {
    const wrapper = mount(ContactListVue, {
      global: {
        provide: {
          [contactInjectionKey]: mockProvider,
        },
        stubs: ["router-link"],
      },
    });

    const rows = wrapper.findAll("tbody tr");
    expect(rows.length).toBe(2);

    const firstRowTds = rows[0].findAll("td");
    expect(firstRowTds[0].text()).toContain("1");
    expect(firstRowTds[1].text()).toContain("テスト太郎");
    expect(firstRowTds[2].text()).toContain("test@test.com");
    expect(firstRowTds[3].text()).toContain("テストです。テストです");
  });
});
