import React from 'react';

// Components


export default class ContainerAdmin extends React.Component {
  render() {
    return(
      <div className="container-layout">
        {this.props.content}
      </div>
    )
  }
}
