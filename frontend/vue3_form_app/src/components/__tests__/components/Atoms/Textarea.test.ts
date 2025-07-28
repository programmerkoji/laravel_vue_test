import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TextareaForm from "@/components/Atoms/TextareaForm.vue";

describe("TextareaForm.vue", () => {
  it("propsで渡した値が正しく表示される", () => {
    const wrapper = mount(TextareaForm, {
      props: {
        modelValue: "テスト値",
        name: "test-textarea",
        placeholder: "入力してください",
      },
    });
    const textarea = wrapper.find("textarea");
    expect((textarea.element as HTMLTextAreaElement).value).toBe("テスト値");
    expect(textarea.attributes("name")).toBe("test-textarea");
    expect(textarea.attributes("placeholder")).toBe("入力してください");
  });

  it("入力値のバインディングが正しく行われる", async () => {
    const wrapper = mount(TextareaForm, {
      props: {
        modelValue: "",
        name: "test-textarea",
      },
    });
    const textarea = wrapper.find("textarea");
    await textarea.setValue("新しい値");
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"]![0]).toEqual(["新しい値"]);
  });

  it("入力イベントがemitされる", async () => {
    const wrapper = mount(TextareaForm, {
      props: {
        modelValue: "",
        name: "test-textarea",
      },
    });
    const textarea = wrapper.find("textarea");
    await textarea.trigger("input");
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
  });

  it("disabled属性が正しく反映される", () => {
    const wrapper = mount(TextareaForm, {
      props: {
        modelValue: "",
        name: "test-textarea",
        disabled: true,
      },
    });
    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("disabled")).toBeDefined();
  });
});
