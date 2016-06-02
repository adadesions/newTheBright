import React from 'react';

export default class ItemImgSlideSmartChild extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

    $('.icon-previous').click(() => {
      $('.slider').slider('prev');
    });

    $('.icon-next').click(() => {
      $('.slider').slider('next');
    });
  }

  render() {
    return (
      <ul className="slides">
        <li className="list-img-slide">
          <img src="/images/whythebright/smartchildren/1.jpg"/>
          <div className="caption center-align">
          </div>
        </li>
        <li className="list-img-slide">
          <img src="/images/whythebright/smartchildren/2.jpg"/>
          <div className="caption center-align">
          </div>
        </li>
        <li className="list-img-slide">
          <img src="/images/whythebright/smartchildren/3.jpg"/>
          <div className="caption center-align">
          </div>
        </li>
        <li className="list-img-slide">
          <img src="/images/whythebright/smartchildren/4.jpg"/>
          <div className="caption center-align">
          </div>
        </li>
        <li className="list-img-slide">
          <img src="/images/whythebright/smartchildren/5.jpg"/>
          <div className="caption center-align">
          </div>
        </li>
        <li className="list-img-slide">
          <img src="/images/whythebright/smartchildren/6.jpg"/>
          <div className="caption center-align">
          </div>
        </li>
      </ul>
    )
  }
}
