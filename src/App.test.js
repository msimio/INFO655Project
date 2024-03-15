import { fireEvent, getByText, render, screen } from '@testing-library/react';
import Playlist from './Playlist';
import Next from './Next'
import Prev from './Prev'
import PlayPause from './PlayPause'
import Shuffle from './Shuffle'
import StatusDisplay from './StatusDisplay'
import Song from './Song'
import { unmountComponentAtNode } from "react-dom" 
import { act } from "react-dom/test-utils"



/*
test('renders app', () => {
  render(<Playlist />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/



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
it("double click test", () => {

act(() => {
render(<StatusDisplay title={"status"}/>, container)
render(<Song songtitle='mysong' artist= 'me' year='2024' />, container)
fireEvent.doubleClick(container)


});
expect(container.textContent).toBe("mysongArtist: me Year: 2024") });

//Unable to properly test component interactions
//Unable to get Jest to work properly--forced to use react test library



 

