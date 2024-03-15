import React, { useState, useEffect } from "react";
import './ExternalStylesheet.css';
import Next from './Next'
import Prev from './Prev'
import PlayPause from './PlayPause'
import Shuffle from './Shuffle'
import StatusDisplay from './StatusDisplay'


function Song({ songtitle, artist, year }) 
{
  if (songtitle) 
  {
  return (
    <div>
    <h1 id="title">{songtitle}</h1>
    <h1 id="subtitle">Artist: {artist} Year: {year}</h1>
    </div>

  );
  }
}




function Podcast(props) 
{

  let season = props.season;
  let episode = props.episode;
  let episodeTitle = props.episodeTitle;
  
  

  if(episodeTitle)
  {
  if (season>="1") {
    return(
      <div>
      <h1 id="podtitle">{episodeTitle}</h1>
      <h1 id="podsubtitle">Season:{season} Episode: {episode}</h1>
      </div>


    )  
    
  }
  if (episode>="1") {
  return (
    <div>
    <h1 id="podtitle">{episodeTitle}</h1>
    <h1 id="podsubtitle">Episode: {episode}</h1>
    </div>
    


  );
  }
  
    return (
      <div>
      <h1 id="podtitle">{episodeTitle}</h1>
      </div>
      
  
  
    );
    

  }
}














const App = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/tracks", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);


  //Add ids
  for(var i=0; i < posts.length; i++)
  {
    posts[i].trackid= i
  }


  //Hooks 
  const [title, setTitle] = useState("Status Display");
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  ///Title array
  var arr = []


  for (let i= 0; i < posts.length; i += 1) 
  {
    const element = posts[i];
    if(element.title)
    { arr.push(element.title) }
    if(element.episodeTitle)
    { arr.push(element.episodeTitle) }
  }


  //Button methods

  const handleClick = () => {var myrand=Math.floor(Math.random() * arr.length);setTitle("Playing: "+arr[myrand]);setIdx(myrand);setPlaying(true)};
  const handleClick2 = () => {setTitle("Paused")
                            if(playing===true){setTitle("Paused");setPlaying(false)}
                            else{setTitle("Playing: "+arr[idx]);setPlaying(true)}


};



  const handleClick3 = () => {setIdx(idx-1)
                              if(idx===0){setIdx(posts.length-1); setTitle("Playing: "+arr[posts.length-1]);setPlaying(true) }
                              else{setTitle("Playing: "+arr[idx-1]);setPlaying(true)};//Json[id].title}
  }
                              
  const handleClick4 = () => {setIdx(idx+1)
                              if(idx>posts.length-2){setIdx(0); setTitle("Playing: "+arr[0]);setPlaying(true) }
                              
                              else{setTitle("Playing: "+arr[idx+1]);setPlaying(true)};}
                            
                              


  return (
    <div>
      <h1 style={{color:"white"}}>My Playlist</h1>
      {posts.map((post) => (
        <div>
          <h3 onDoubleClick={() => {setIdx(post.trackid);if(post.title){setTitle("Playing: "+post.title)};if(post.episodeTitle){setTitle("Playing: "+post.episodeTitle)}setPlaying(true)}}>
            <Song songtitle={post.title} artist= {post.artist} year={post.year} />
            <Podcast season={post.season} episode= {post.episode} episodeTitle={post.episodeTitle}/>
          </h3>
        </div>
      ))}

      <Shuffle idx={idx} onClick={handleClick}></Shuffle>
      <PlayPause idx={idx} onClick={handleClick2}></PlayPause>
      <Prev idx={idx} onClick={handleClick3}></Prev>
      <Next idx={idx} onClick={handleClick4}></Next>
      <StatusDisplay title={title}></StatusDisplay>
    </div>
  );
};

export default App;