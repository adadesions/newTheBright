import React, { PropTypes } from 'react';

export default class FriendName extends React.Component {

  render() {
    return(
      <div className="friend-name">
        <div><h5>{this.props.friend.name}</h5></div>
      </div>
    )
  }
}

FriendName.propTypes = {
  friend: PropTypes.object.isRequired,
};
