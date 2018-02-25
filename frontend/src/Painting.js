import React from 'react';

const Painting = ({painting}) => {
  // console.log(painting) // works
  return (
    <div className="five wide column">

      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={painting.image} alt={painting.slug} />
          </div>
          <div className="content">
            <div className="header">{painting.title}</div>
            <div className="meta">
              <a>{painting.artist.name} ({painting.artist.birthday}-{painting.artist.deathday})</a>
            </div>
            <div className="description">
              <p><span>Museum: </span>{painting.museum.name}</p>
              <p><span>Dimensions: </span>w{painting.dimensions.width} x h{painting.dimensions.height} mm</p>
              <p><span>Creator's Hometown: </span>{painting.artist.hometown}</p>

            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              <i className="heart outline like icon"></i>
              {painting.votes}
            </span>
            <span>
              <i className="calendar alternate outline icon"></i>
              {painting.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Painting;
