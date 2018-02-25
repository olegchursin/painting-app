import React from 'react';
import PaintingsList from './PaintingsList'
import Sort from './Sort'
import Filter from './Filter'

class PaintingsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      paintings: [],
      artists: [],
      artistsFilter: ''
    };
  }

  componentDidMount = () => {
    this.fetchPaintings();
    this.fetchArtists();
  }

  fetchPaintings = () => {
    fetch('http://localhost:3000/api/v1/paintings')
    .then(res => res.json())
    .then(paintingsArr => {
      this.setState({
        paintings: paintingsArr
      });
    })
  }

  fetchArtists = () => {
    fetch('http://localhost:3000/api/v1/artists')
    .then(res => res.json())
    .then(artistsArr => {
      this.setState({
        artists: artistsArr
      });
    })
  }

  sortAlpha = () => {
    const paintingsArr = this.state.paintings
    // console.log(paintingsArr) // works

    paintingsArr.sort(function(a, b) {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({
      paintings: paintingsArr
    })
  }

  sortDate = () => {
    const paintingsArr = this.state.paintings
    console.log(paintingsArr) // works

    paintingsArr.sort(function (a, b) {
      return parseInt(a.date.substr(a.date.length - 4), 10).value - parseInt(b.date.substr(b.date.length - 4), 10).value;
    })
    this.setState({
      paintings: paintingsArr
    })
  }

  handleFilter = (e) => {
    console.log(e.target.value) // artist.id
    this.setState({
      artistsFilter: e.target.value
    })
  }

  render(){
    return (
      <div>
        <h1>Paintings</h1>
        <div className="ui grid container sort-filter">
          <Sort sortAlpha={this.sortAlpha} sortDate={this.sortDate} />
          <Filter paintings={this.state.paintings} artists={this.state.artists} handleFilter={this.handleFilter} />
        </div>
        <PaintingsList paintings={this.state.paintings} artistsFilter={this.state.artistsFilter}/>
      </div>

    )
  }
}

export default PaintingsContainer;
