import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {cards} = props;

  return <Main cards={cards} />;
};

export default App;
