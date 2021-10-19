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

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});
