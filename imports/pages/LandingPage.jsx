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
            <div className="col s12 l12 slide-container">
              <div className="slider">
                <img id="icon-previous" src="/images/mainpage/slide/previous.png"/>
                <img id="icon-next" src="/images/mainpage/slide/next.png"/>
                <ul className="slides">
                  <ItemImgSlide />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 l12 section-poster">
          {this.renderposter()}
        </div>
        <div className="col s12 l12 section-welcome parallax-container">
          <div className="parallax"><img src="/images/landing/bg-pl3.png"/></div>
          <div className="row">
            <div className="col s5 l5 text-column-left"></div>
            <div className="col s7 l7 text-column-right"><a className="btn-go" onClick={this.onClickGoMainpage} href=""><LandingButton /></a><img src="/images/landing/side_go_btn.png"/></div>
          </div>
        </div>
      </div>
    )
  }
}
