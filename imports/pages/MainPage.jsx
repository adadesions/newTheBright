import React from 'react';

// Component
import ItemImgSlide from '../ui/components/mainpage/ItemImgSlide.jsx';
import ItemCardCourse from '../ui/components/mainpage/ItemCardCourse.jsx';
import ItemPoster from '../ui/components/mainpage/ItemPoster.jsx';
import MenuOther from '../ui/components/mainpage/MenuOther.jsx';

export default class MainPage extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      if(screen.width > 1000){
        $('.parallax').parallax();
      }
    });
  }

  getItemCard() {
    return [
      { _id: 1, src: 'images/navigator/logo.png', title: 'หาดใหญ่', linktitle: '' },
      { _id: 2, src: 'images/navigator/logo.png', title: 'ขอนแก่น', linktitle: '' },
      { _id: 3, src: 'images/navigator/logo.png', title: 'พิษณุโลก', linktitle: '' },
      { _id: 4, src: 'images/navigator/logo.png', title: 'Comming Soon', linktitle: '' }
    ];
  }

  renderCard() {
    return this.getItemCard().map((items) => (
      <ItemCardCourse key={items._id} items={items} />
    ));
  }

  render() {
    return(
      <div>
        <div className="mainpage">
          <div className="col s12 l12 slide-and-promote parallax-container">
            <div className="parallax"><img src="/images/mainpage/bg-pl.jpg"/></div>
            <div className="row section-slide">
              <div className="col s0 l1 icon-previous"><img src="/images/mainpage/slide/previous.png"/></div>
              <div className="col s12 l10 slide-container">
                <div className="slider">
                  <ul className="slides">
                    <ItemImgSlide />
                      <li className="list-img-slide">
                        <img src="/images/mainpage/test2.jpg"/>
                        <div className="caption center-align">
                          {/*<h5>This is our big Tagline!</h5>
                          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                        </div>
                      </li>
                      <li className="list-img-slide">
                        <img src="/images/mainpage/test3.jpg"/>
                        <div className="caption center-align">
                          {/*<h5>This is our big Tagline!</h5>
                          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="col s0 l1 icon-next"><img src="/images/mainpage/slide/next.png"/></div>
            </div>
            <div className="row section-promote-course">
              {this.renderCard()}
            </div>
          </div>
          <div className="col s12 l12 section-poster">
            <ItemPoster />
          </div>
          <div className="row section-menu-other parallax-container">
            <div className="parallax"><img src="/images/mainpage/bg-pl2.jpg"/></div>
            <MenuOther />
          </div>
        </div>
      </div>
    )
  }
}
