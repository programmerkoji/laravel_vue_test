import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InputForm from "@/components/Atoms/InputForm.vue";

describe("InputForm.vue", () => {
  it("propsで渡した値が正しく表示される", () => {
    const wrapper = mount(InputForm, {
      props: {
        modelValue: "テスト値",
        name: "test-input",
        placeholder: "入力してください"
      },
    });
    const input = wrapper.find("input");
    expect((input.element as HTMLInputElement).value).toBe("テスト値");
    expect(input.attributes("name")).toBe("test-input");
    expect(input.attributes("placeholder")).toBe("入力してください");
  });

  it("入力値のバインディングが正しく行われる", async () => {
    const wrapper = mount(InputForm, {
      props: {
        modelValue: "",
        name: "test-input",
      },
    });
    const input = wrapper.find("input");
    await input.setValue("新しい値");
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"]![0]).toEqual(["新しい値"]);
  });

  it("入力イベントがemitされる", async () => {
    const wrapper = mount(InputForm, {
      props: {
        modelValue: "",
        name: "test-input",
      },
    });
    const input = wrapper.find("input");
    await input.trigger("input");
    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
  });

  it("disabled属性が正しく反映される", () => {
    const wrapper = mount(InputForm, {
      props: {
        modelValue: "",
        name: "test-input",
        disabled: true,
      },
    });
    const input = wrapper.find("input");
    expect(input.attributes("disabled")).toBeDefined();
  });
});
