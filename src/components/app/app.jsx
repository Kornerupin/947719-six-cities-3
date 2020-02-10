import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {cards} = props;

  return <Main cards={cards} />;
};

App.propTypes = {
  cards: PropTypes.array.isRequired
};

export default App;
