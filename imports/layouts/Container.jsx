import React from 'react';

// Components
import Navigator from '../ui/components/navigator/Navigator.jsx';
import Footer from '../ui/components/footer/Footer.jsx';

export default class Container extends React.Component {
  render() {
    return(
      <div>
        <Navigator />
        {this.props.content}
        <Footer />
      </div>
    )
  }
}
