import React from 'react';

const Filter = (props) => {
  // console.log("Filter props", props.paintings) // works
  // console.log("Filter props", props.artists) // works

  return (
    <div className="eight wide column">
      <h4>Filter by artist:</h4>
      <select className="ui dropdown" onChange={props.handleFilter}>
        {
          props.artists.map(artist => {
            return <option value={artist.name} key={artist.id}>{artist.name}</option>
          })
        }
      </select>
    </div>

  )
}

export default Filter;
