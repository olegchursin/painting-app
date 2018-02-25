import React from 'react';

const Sort = (props) => {
  // console.log("Sort props", props) // works

  return (
    <div className="ui form eight wide column">
      <h4>Sort:</h4>
      <div className="inline fields">
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="alpha" onChange={props.sortAlpha} />
            <label>Alphabetically</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="date" onChange={props.sortDate} />
            <label>By year</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sort;
