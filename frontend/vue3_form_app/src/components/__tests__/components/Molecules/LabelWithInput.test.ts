import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LabelWithInput from "@/components/Molecules/LabelWithInput.vue";

describe("LabelWithInput.vue", () => {
  it("labelが正しく表示される", () => {
    const wrapper = mount(LabelWithInput, {
      props: {
        label: "ユーザー名",
        name: "username",
      },
    });
    expect(wrapper.text()).toContain("ユーザー名");
  });

  it("InputFormにpropsが正しく渡る", () => {
    const wrapper = mount(LabelWithInput, {
      props: {
        label: "メール",
        name: "email",
        placeholder: "メールアドレス",
        modelValue: "test@example.com",
        disabled: true,
      },
    });
    const input = wrapper.findComponent({ name: "InputForm" });
    expect(input.props("name")).toBe("email");
    expect(input.props("placeholder")).toBe("メールアドレス");
    expect(input.props("modelValue")).toBe("test@example.com");
    expect(input.props("disabled")).toBe(true);
  });

  it("InputFormからのupdate:modelValueがemitされる", async () => {
    const wrapper = mount(LabelWithInput, {
      props: {
        label: "パスワード",
        name: "password",
        modelValue: "",
      },
    });
    const input = wrapper.findComponent({ name: "InputForm" });
    await input.vm.$emit("update:modelValue", "newpass");
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"]![0]).toEqual(["newpass"]);
  });
});
