import React from 'react';

export default class ItemImgSlide extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  }

  render() {
    return (
      <li className="list-img-slide">
        <img src="/images/mainpage/test.jpg"/>
        <div className="caption center-align">
          {/*<h5>This is our big Tagline!</h5>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
        </div>
      </li>
    )
  }
}
