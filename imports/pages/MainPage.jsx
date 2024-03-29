import React from 'react';

// Component
import ItemImgSlide from '../ui/components/mainpage/ItemImgSlide.jsx';
import ItemCardCourse from '../ui/components/mainpage/ItemCardCourse.jsx';
import ItemPoster from '../ui/components/mainpage/ItemPoster.jsx';
import MenuOther from '../ui/components/mainpage/MenuOther.jsx';
import BoxSocial from '../ui/components/mainpage/BoxSocial.jsx';
import ItemSocials from '../ui/components/mainpage/ItemSocials.jsx';
import LearningSystem from '../ui/components/mainpage/LearningSystem.jsx';
import '../api/youtube.js';

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

      $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
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
          <div className="chanel row">
            <div className="col s12 l6 youtube-embed">
              <h4>The Bright Chanel</h4>
              <hr className="line-section"/>
              <div className="video-container z-depth-1">
                <iframe className="z-depth-1" src="https://www.youtube.com/embed/IP6KOMHvn7U" frameborder="0" allowfullscreen></iframe>
              </div>
              <div className="g-ytsubscribe" data-channelid="UCJQDdVxg_fFFY2HbzXUK4MA" data-layout="full" data-count="default"></div>
            </div>
            <div className="col s12 l6 topic">
              <h4>บทความน่าสนใจ</h4>
              <hr className="line-section"/>
              <ul className="collapsible z-depth-1" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header"><img src="/images/mainpage/test4.jpg"/>Topic 1</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
                <li>
                  <div className="collapsible-header"><img src="/images/mainpage/test5.jpg"/>Topic 2</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
                <li>
                  <div className="collapsible-header"><img src="/images/mainpage/test6.jpg"/>Topic 3</div>
                  <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
              </ul>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="learning-system">
            <div className="col s12 l12 head-menu-learning">
              <a href=""><img src="/images/mainpage/learning-system/banner.jpg"/></a>
            </div>
            <LearningSystem />
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
