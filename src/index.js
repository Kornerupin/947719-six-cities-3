import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import mockCards from "./mocks/mock-cards";

ReactDOM.render(<App cards={mockCards} />, document.getElementById(`root`));
