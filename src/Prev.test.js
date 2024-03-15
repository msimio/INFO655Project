import React from "react"
import { render, unmountComponentAtNode } from "react-dom" 
import { act } from "react-dom/test-utils"

import Prev from "./Prev"
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

it("button render", () => {

  act(() => {
  render(<Prev/>, container)
  });
  expect(container.textContent).toBe("Previous") });

    //Right now I am only cheching if button comes up. I am not testing any button functionality or click handling


  //testing buttons, functions might be too chllenging
  //might just be song/podcast

  //Figure out button/status testing
  //Stick with react resting library
  //create separate files
  //<StatusDisplay title={title}></StatusDisplay>

  /*
it("play gets clicked", () => {

  act(() => {
    render(<PlayPause idx={0} onClick={''}></PlayPause>)
  });
  const button = screen.getByRole('button')
  fireEvent.click(button)
  
  

  //write mjojre test cases
  //consider truth table
  //test triggers with buttons
  //input/fireevent?
  //react component testing



/*

import { render, screen } from '@testing-library/react';
import Song from './Song';
import Podcast from './Podcast';

test('renders song', () => {

  const { getByText } = render(<Song songtitle={'hello'} artist= {'hi'} year={'hi'} />);
  const messageElement = getByText('hello');
  expect(messageElement).toBeInTheDocument(); 

});

test('renders podcast', () => {

  const { getByText } = render(<Podcast season={'hi'} episode= {'9'} episodeTitle={'hi'}/>);
  const messageElement = getByText('9');
  expect(messageElement).toBeInTheDocument(); 

});

//types of testing, snapshot, trigger
*/


