import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LabelWithTextarea from "@/components/Molecules/LabelWithTextarea.vue";

describe("LabelWithTextarea.vue", () => {
  it("labelが正しく表示される", () => {
    const wrapper = mount(LabelWithTextarea, {
      props: {
        label: "ユーザー名",
        name: "username",
      },
    });
    expect(wrapper.text()).toContain("ユーザー名");
  });

  it("TextareaFormにpropsが正しく渡る", () => {
    const wrapper = mount(LabelWithTextarea, {
      props: {
        label: "メール",
        name: "email",
        placeholder: "メールアドレス",
        modelValue: "test@example.com",
        disabled: true,
      },
    });
    const textarea = wrapper.findComponent({ name: "TextareaForm" });
    expect(textarea.props("name")).toBe("email");
    expect(textarea.props("placeholder")).toBe("メールアドレス");
    expect(textarea.props("modelValue")).toBe("test@example.com");
    expect(textarea.props("disabled")).toBe(true);
  });

  it("TextareaFormからのupdate:modelValueがemitされる", async () => {
    const wrapper = mount(LabelWithTextarea, {
      props: {
        label: "パスワード",
        name: "password",
        modelValue: "",
      },
    });
    const textarea = wrapper.findComponent({ name: "TextareaForm" });
    await textarea.vm.$emit("update:modelValue", "newpass");
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"]![0]).toEqual(["newpass"]);
  });
});
