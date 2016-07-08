import React from 'react';

// Component
import ItemImgSlide from '../ui/components/mainpage/ItemImgSlide.jsx';
import ItemCardCourse from '../ui/components/mainpage/ItemCardCourse.jsx';
import ItemPoster from '../ui/components/mainpage/ItemPoster.jsx';
import MenuOther from '../ui/components/mainpage/MenuOther.jsx';
import BoxSocial from '../ui/components/mainpage/BoxSocial.jsx';
import ItemSocials from '../ui/components/mainpage/ItemSocials.jsx';
export default class MainPage extends React.Component {

  componentDidMount() {
    // Check width screen
    $(document).ready(function(){
      if(screen.width > 1000){
        $('.parallax').parallax();
      }

      $('body,html').animate({
        scrollTop: 0
      }, 800);

    });

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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
              <div className="col s12 l12 slide-container">
                <div className="slider">
                  <img id="icon-previous" src="/images/mainpage/slide/previous.png"/>
                  <img id="icon-next" src="/images/mainpage/slide/next.png"/>
                  <ItemImgSlide />
                </div>
              </div>
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
          <div className="row social-contact">
            <div className="col l7 page-box">
              <BoxSocial />
            </div>
            <div className="col l5">
              <ItemSocials />
                <div className="contact-center">
                  <h3>Contact Center</h3>
                  <div><h5>Tel: 092-591-0006</h5></div>
                  <div><h5>Email: thebright.icare@gmail.com</h5></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
