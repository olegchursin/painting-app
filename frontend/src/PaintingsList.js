import React from 'react';
import Painting from './Painting'

const PaintingsList = (props) => {
  const paintingsArr = props.paintings
  // console.log(paintingsArr) // works
  const filteredByArtist = paintingsArr.filter(p => p.artist.name.includes(props.artistsFilter))


  return (
    <div className="ui grid container">
      {
        filteredByArtist.map(painting => {
          return <Painting painting={painting} key={painting.id}/>
        })
      }
    </div>
  )

}


export default PaintingsList;
