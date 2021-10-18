import React from "react";
import PropTypes from "prop-types";

// Receive the success state as a prop
// Render conditionally

/**
 * functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component or null if props is false
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.protoTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
