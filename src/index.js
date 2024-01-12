require("file-loader?name=[name].[ext]!./template.html");
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
