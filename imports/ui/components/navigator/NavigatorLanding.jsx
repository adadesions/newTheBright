import React from 'react';

export default class NavigatorLanding extends React.Component {

  componentDidMount() {
    $(document).scroll(function(){
      $('.navigator-landing').addClass('navigator-on-scroll-landing');
      $('.menu-navigator-component').addClass('menu-navigator-component-on-scroll');
    });

    $(document).scroll(function() {
      if ($(this).scrollTop() === 0) { // this refers to window
        $('.navigator-landing').removeClass('navigator-on-scroll-landing');
        $('.menu-navigator-component').removeClass('menu-navigator-component-on-scroll');
      }
    });
  }

  render() {
    return(
      <nav className="navigator-landing">
        <div className="top-nav-landing">
          <a className="logo" href="/"><img className="nav-logo-landing" src="/images/navigator/logo.png"/></a>
          <div>
            <a className="download-brochure" href=""><img className="nav-brochrue-landing" src="/images/landing/brochure.png"/></a>
          </div>
        </div>
      </nav>
    )
  }
}
