import React from 'react';

// Components
import Navigator from '../ui/components/navigator/Navigator.jsx';

export default class Container extends React.Component {
  render() {
    return(
      <div>
        <Navigator />
        {this.props.content}
      </div>
    )
  }
}
