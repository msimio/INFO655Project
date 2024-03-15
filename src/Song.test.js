import React from "react"
import { render, unmountComponentAtNode } from "react-dom" 
import { act } from "react-dom/test-utils"
import Song from "./Song"
import { fireEvent } from "@testing-library/react"

import StatusDisplay from "./StatusDisplay"


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
it("song renders with a songtitle", () => {

act(() => {
render(<Song songtitle='mysong' artist= 'me' year='2024' />, container)
});
expect(container.textContent).toBe("mysongArtist: me Year: 2024") });

it("song renders without a songtitle", () => {

  act(() => {
  render(<Song songtitle='' artist= 'me' year='2024' />, container)
  });
  expect(container.textContent).toBe("") });

it("song with all integers", () => {

  act(() => {
  render(<Song songtitle={1} artist= {1} year={1} />, container)//render
  });
  expect(container.textContent).toBe("1Artist: 1 Year: 1") });//assertion?

  /*
it("test double click", () => {

  act(() => {
  render(<Song songtitle={1} artist= {1} year={1} />,<StatusDisplay title={"0"} />, container)//render
  });
  fireEvent.doubleClick(screen.getByText(/1Artist: 1 Year: 1/i))});
  //expect(container.textContent).toBe("1Artist: 1 Year: 1") });//assertion?
  */

