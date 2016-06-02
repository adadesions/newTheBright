import React from 'react';

// Component
import ItemImgSlide from '../ui/components/mainpage/ItemImgSlide.jsx';
import ItemPoster from '../ui/components/mainpage/ItemPoster.jsx';
import LandingButton from '../ui/components/landing/LandingButton.jsx';

export default class LandingPage extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      if(screen.width > 1000){
        $('.parallax').parallax();
      }
    });
  }

  onClickGoMainpage() {
    FlowRouter.go('main');
  }

  getItemPoster() {
    return [
      { _id: 1, src: 'images/mainpage/test.jpg'}
    ];
  }

  renderposter() {
    return this.getItemPoster().map((picture) => (
      <ItemPoster key={picture._id} picture={picture} />
    ));
  }

  render() {
    return(
      <div className="landing-page">
        <div className="slide-landing parallax-container">
          <div className="parallax"><img src="/images/mainpage/bg-pl.jpg"/></div>
          <div className="row section-slide">
            <div className="col s0 l1 icon-previous"><img src="/images/mainpage/slide/previous.png"/></div>
            <div className="col s12 l10 slide-container">
              <div className="slider">
                <ul className="slides">
                  <ItemImgSlide />
                </ul>
              </div>
            </div>
            <div className="col s0 l1 icon-next"><img src="/images/mainpage/slide/next.png"/></div>
          </div>
        </div>
        <div className="col s12 l12 section-poster">
          {this.renderposter()}
        </div>
        <div className="col s12 l12 section-welcome parallax-container">
          <div className="parallax"><img src="/images/landing/bg-pl3.png"/></div>
          <div className="row">
            <div className="col s4 l5 text-column-left"><span>Welcome To</span></div>
            <div className="col s4 l2 icon-go">
              <a className="btn-go" onClick={this.onClickGoMainpage} href=""><LandingButton /></a>
            </div>
            <div className="col s4 l5 text-column-right"><span>The Bright</span></div>
          </div>
        </div>
      </div>
    )
  }
}
