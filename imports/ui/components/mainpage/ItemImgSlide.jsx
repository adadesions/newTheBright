import React from 'react';

export default class ItemImgSlide extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.slider').slider({full_width: false});
    });

    $('#icon-previous').click(() => {
      $('.slider').slider('prev');
    });

    $('#icon-next').click(() => {
      $('.slider').slider('next');
    });
  }

  render() {
    return (
      <ul className="slides">
        <li className="list-img-slide col l12">
          <img src="/images/mainpage/test2.jpg"/>
          <div className="caption center-align">
            {/*<h5>This is our big Tagline!</h5>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
          </div>
        </li>
        <li className="list-img-slide col l12">
          <img src="/images/mainpage/test3.jpg"/>
          <div className="caption center-align">
            {/*<h5>This is our big Tagline!</h5>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
          </div>
        </li>
      </ul>
    )
  }
}
