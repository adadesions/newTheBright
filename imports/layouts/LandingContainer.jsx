import React from 'react';

// Components
import NavigatorLanding from '../ui/components/navigator/NavigatorLanding.jsx';
import Footer from '../ui/components/footer/Footer.jsx';

export default class LandingContainer extends React.Component {
  render() {
    return(
      <div className="container-layout">
        <NavigatorLanding />
        {this.props.content}
        <Footer />
      </div>
    )
  }
}
