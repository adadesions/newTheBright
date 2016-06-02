import React from 'react';

// Component
import ItemImgSlideSmartChild from '../ui/components/mainpage/ItemImgSlideSmartChild.jsx';
export default class SmartChild extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      if(screen.width > 1000){
        $('.parallax').parallax();
      }
    });
  }

  render() {
    return(
      <div className="smart-child parallax-container">
        <div className="parallax"><img src="/images/mainpage/bg-pl.jpg"/></div>
        <div className="row section-slide">
          <div className="col s0 l1 icon-previous"><img src="/images/mainpage/slide/previous.png"/></div>
          <div className="col s12 l10 slide-container">
            <div className="slider">
              <ItemImgSlideSmartChild />
            </div>
          </div>
          <div className="col s0 l1 icon-next"><img src="/images/mainpage/slide/next.png"/></div>
        </div>
      </div>
    )
  }
}
