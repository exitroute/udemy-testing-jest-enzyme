// Polyfill for encoding which isn't present globally in jsdom
import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

/**
 * Factory function to create wrapper with specified initial conditions,
 * then submit a guessed word of train
 *
 * @function
 *
 * @param {object} state - Initial conditions
 * @returns {wrapper}
 */

const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  // simulate click on submit button
  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("creates a guessed words table with one row", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe("some words guessed", () => {});

describe("guess secret word", () => {});
