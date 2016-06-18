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

    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
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

  getItemCard() {
    return [
      { _id: 1, src: 'images/mainpage/card-course/hy.png', title: 'หาดใหญ่', linktitle: '/hatyai' },
      { _id: 2, src: 'images/mainpage/card-course/kk.png', title: 'ขอนแก่น', linktitle: '/khonkaen' },
      { _id: 3, src: 'images/mainpage/card-course/ps.png', title: 'พิษณุโลก', linktitle: '/phitsanulok' },
      { _id: 4, src: 'images/mainpage/card-course/cs.png', title: 'Comming Soon', linktitle: '' }
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
                  <ItemImgSlide />
                </div>
              </div>
              <div className="col s0 l1 icon-next"><img src="/images/mainpage/slide/next.png"/></div>
            </div>
            <div className="row section-promote-course">
              {this.renderCard()}
            </div>
          </div>
          <div className="col s12 l12 section-poster">
            {this.renderposter()}
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
