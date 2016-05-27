import React from 'react';

// Components
import MenuNavigator from './MenuNavigator.jsx';

export default class Navigator extends React.Component {
  render() {
    return(
      <nav className="navigator">
        <div className="top-nav">
          <a className="logo" href=""><img className="nav-logo" src="/images/navigator/logo.png"/></a>
        </div>
        <div className="bottom-nav">
          <MenuNavigator />
        </div>
      </nav>
    )
  }
}