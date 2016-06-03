import React, { PropTypes } from 'react';

export default class ItemsCourse extends React.Component {

  render() {
    return(
      <div className="items-course">
        <div className="header-course">
          <img src={this.props.poster.head}/>
        </div>
        <div className="poster-course">
          <img src={this.props.poster.detail}/>
        </div>
      </div>
    )
  }
}

ItemsCourse.propTypes = {
  poster: PropTypes.object.isRequired,
};
