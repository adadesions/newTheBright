import React from 'react';

// Components
import MenuNavigator from './MenuNavigator.jsx';

export default class Navigator extends React.Component {

  componentDidMount() {
    $(document).scroll(function(){
      $('.navigator').addClass('navigator-on-scroll');
      $('.menu-navigator-component').addClass('menu-navigator-component-on-scroll');
    });

    $(document).scroll(function() {
      if ($(this).scrollTop() === 0) { // this refers to window
        $('.navigator').removeClass('navigator-on-scroll');
        $('.menu-navigator-component').removeClass('menu-navigator-component-on-scroll');
      }
    });
  }

  render() {
    return(
      <nav className="navigator">
        <div className="top-nav">
          <a className="logo" href="/"><img className="nav-logo" src="/images/navigator/logo.png"/></a>
        </div>
        <div className="bottom-nav">
          <MenuNavigator />
        </div>
      </nav>
    )
  }
}
