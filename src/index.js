import React from "react"
import ReactDOM from "react-dom"
import { Normalize } from "styled-normalize"
import App from "./App"

const Root = () => (
  <React.Fragment>
    <Normalize />
    <App />
  </React.Fragment>
)

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Root />, document.getElementById("root"))
