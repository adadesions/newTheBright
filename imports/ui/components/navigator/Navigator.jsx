import React from 'react';

// Components
import MenuNavigator from './MenuNavigator.jsx';
import GrayBar from './GrayBar.jsx';
export default class Navigator extends React.Component {

  componentDidMount() {
    $(document).scroll(function(){
      $('.navigator').addClass('navigator-on-scroll');
      $('.gray-bar').addClass('gray-bar-on-scroll');
      $('.menu-navigator-component').addClass('menu-navigator-component-on-scroll');
    });

    $(document).scroll(function() {
      if ($(this).scrollTop() === 0) { // this refers to window
        $('.navigator').removeClass('navigator-on-scroll');
        $('.gray-bar').removeClass('gray-bar-on-scroll');
        $('.menu-navigator-component').removeClass('menu-navigator-component-on-scroll');
      }
    });
  }

  onClickMainpage() {
    FlowRouter.go('main');
    $( document ).ready(function(){
      $('.button-collapse').sideNav('hide');
    });
  }

  render() {
    return(
      <nav className="navigator">
        <GrayBar />
        <div className="top-nav">
          <a onClick={this.onClickMainpage} className="logo" href=""><img className="nav-logo" src="/images/navigator/logo.png"/></a>
        </div>
        <div className="bottom-nav">
          <MenuNavigator />
        </div>
      </nav>
    )
  }
}
