import { describe, expect, test } from "vitest";

import { mount } from "@vue/test-utils";
import FiverField from "../FiverField.vue";

describe("FiverField", () => {
  test.each([
    [0, ""],
    [1, "⬤"],
    [2, "⬤⬤"],
    [3, "⬤⬤⬤"],
    [4, "⬤⬤⬤⬤"],
    [5, "⬤⬤⬤⬤⬤"],
  ])("filled(%i) -> %s", (filled, expected) => {
    const wrapper = mount(FiverField, { props: { filled: filled } });
    expect(wrapper.text()).toBe(expected);
  });
});
