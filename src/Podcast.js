export default function Podcast(props) 
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