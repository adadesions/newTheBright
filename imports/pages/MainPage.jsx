import React from 'react';

// Component
import ItemImgSlide from '../ui/components/mainpage/ItemImgSlide.jsx';
import ItemCardCourse from '../ui/components/mainpage/ItemCardCourse.jsx';
import ItemPoster from '../ui/components/mainpage/ItemPoster.jsx';
import MenuOther from '../ui/components/mainpage/MenuOther.jsx';

export default class MainPage extends React.Component {

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <div className="mainpage">
          <div className="col s12 l12 section-slide">
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
          <div className="row section-promote-course">
            <ItemCardCourse />
            <ItemCardCourse />
            <ItemCardCourse />
            <ItemCardCourse />
          </div>
          <div className="col s12 l12 section-poster">
            <ItemPoster />
          </div>
          <div className="row section-menu-other">
            <MenuOther />
          </div>
        </div>
      </div>
    )
  }
}
