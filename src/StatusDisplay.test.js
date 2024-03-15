import React from "react"
import { render, unmountComponentAtNode } from "react-dom" 
import { act } from "react-dom/test-utils"
import StatusDisplay from "./StatusDisplay"
import { fireEvent } from "@testing-library/react"
let container = null
beforeEach(() => {
 // setup a DOM element as a render target
container = document.createElement("div")
document.body.appendChild(container) })
afterEach(() => {
 // cleanup on exiting
 unmountComponentAtNode(container)
 container.remove()
 container = null
})

it("status display", () => {

  act(() => {
  render(<StatusDisplay title={"status"}/>, container)
  });
  expect(container.textContent).toBe("status") });
