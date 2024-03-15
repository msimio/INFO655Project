import React from "react"
import { render, unmountComponentAtNode } from "react-dom" 
import { act } from "react-dom/test-utils"
import Podcast from "./Podcast"
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
it("podcast renders with episode title", () => {

    act(() => {
    render(<Podcast season='1' episode= '1' episodeTitle='mytitle'/>, container)
    });
    expect(container.textContent).toBe("mytitleSeason:1 Episode: 1") });
  
  it("podcast renders without episode title", () => {
  
    act(() => {
    render(<Podcast season='1' episode= '1' episodeTitle=''/>, container)
    });
    expect(container.textContent).toBe("") });
  
  it("podcast renders with season", () => {
  
    act(() => {
    render(<Podcast season='6' episode= '1' episodeTitle='mytitle'/>, container)
    });
    expect(container.textContent).toBe("mytitleSeason:6 Episode: 1") });
  
  it("podcast renders without season", () => {
  
    act(() => {
    render(<Podcast season='' episode= '1' episodeTitle='mytitle'/>, container)
    });
    expect(container.textContent).toBe("mytitleEpisode: 1") });
  
  it("podcast renders with only title", () => {
  
    act(() => {
    render(<Podcast season='' episode= '' episodeTitle='mytitle'/>, container)
    });
    expect(container.textContent).toBe("mytitle") });

  it("podcast with all integers", () => {
  
    act(() => {
    render(<Podcast season={1} episode= {1} episodeTitle={1}/>, container)
    });
    expect(container.textContent).toBe("1Season:1 Episode: 1") });
  