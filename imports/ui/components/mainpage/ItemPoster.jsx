import React, { PropTypes } from 'react';

export default class ItemPoster extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }

  render() {
    return(
      <div>
        <img className="materialboxed" width="100%" src={this.props.picture.src}/>
      </div>
    )
  }
}

ItemPoster.propTypes = {
  picture: PropTypes.object.isRequired,
};
