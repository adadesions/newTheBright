import React from 'react';

// Components
import Navigator from '../ui/components/navigator/Navigator.jsx';
import Footer from '../ui/components/footer/Footer.jsx';

export default class Container extends React.Component {
  render() {
    return(
      <div className="container-layout">
        <Navigator />
        {this.props.content}
        <Footer />
      </div>
    )
  }
}
