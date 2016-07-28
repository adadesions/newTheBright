import React from 'react';

export default class ItemSocials extends React.Component {
  render() {
    return(
      <div>
        <div className="social-list-item col l12">
          <div className="social-img-item">
            <img src="/images/mainpage/social/logo-facebook.png"/>
          </div>
          <div className="social-link-item">
            <span className="header-social">FACEBOOK</span>
            <a href="https://www.facebook.com/thebrightofficial"><span className="link-social">https://www.facebook.com/thebrightofficial</span></a>
          </div>
        </div>
        <div className="social-list-item col l12">
          <div className="social-img-item">
            <img src="/images/mainpage/social/logo-twitter.png"/>
          </div>
          <div className="social-link-item">
            <span className="header-social">TWITTER</span>
            <a href="https://twitter.com/thebrighttwit"><span className="link-social">https://twitter.com/thebrighttwit</span></a>
          </div>
        </div>
        <div className="social-list-item col l12">
          <div className="social-img-item">
            <img src="/images/mainpage/social/logo-instagram.png"/>
          </div>
          <div className="social-link-item">
            <span className="header-social">INSTAGRAM</span>
            <a href="https://www.instagram.com/thebrightacademy/"><span className="link-social">https://www.instagram.com/thebrightacademy/</span></a>
          </div>
        </div>
        <div className="social-list-item col l12">
          <div className="social-img-item">
            <img src="/images/mainpage/social/logo-youtube.png"/>
          </div>
          <div className="social-link-item">
            <span className="header-social">YOUTUBE</span>
            <a href="https://www.youtube.com"><span className="link-social">https://www.youtube.com</span></a>
          </div>
        </div>
      </div>
    )
  }
}
