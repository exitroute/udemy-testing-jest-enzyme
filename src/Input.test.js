import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

/**
 * Factory function to create ShallowWrapper for the Input component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<Input />);
};

test("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});
