export default function Song({ songtitle, artist, year }) 
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