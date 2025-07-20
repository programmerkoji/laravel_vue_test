import type { Contact } from "@/types/contact";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ContactListVue from "../Organisms/ContactList.vue";
import { contactsInjectionKey } from "@/providers/ContactsProviderInjectionKey";

const mockContacts: Contact[] = [
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
];

describe("ContactList.vue", () => {
  it("propsのcontactsを使って一覧を表示する", () => {
    const wrapper = mount(ContactListVue, {
      global: {
        provide: {
          [contactsInjectionKey as symbol]: mockContacts,
        },
      },
    });

    const rows = wrapper.findAll("tbody tr");
    expect(rows).toHaveLength(mockContacts.length);

    // 名前が表示されているか確認
    expect(wrapper.text()).toContain("テスト太郎");
    expect(wrapper.text()).toContain("テスト02太郎");
  });

  it("各項目が正しく表示されているか", () => {
    const wrapper = mount(ContactListVue, {
      global: {
        provide: {
          [contactsInjectionKey as symbol]: mockContacts,
        },
      },
    });

    const firstRow = wrapper.findAll("tbody tr")[0];
    expect(firstRow.text()).toContain("テスト太郎");
    expect(firstRow.text()).toContain("test@test.com");
    expect(firstRow.text()).toContain("テストです。テストです");
    expect(firstRow.text()).toContain("1");
    expect(firstRow.text()).toContain("");
    expect(firstRow.text()).toContain("");
  });
});
