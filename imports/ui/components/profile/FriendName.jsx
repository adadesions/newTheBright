import React, { PropTypes } from 'react';

export default class FriendName extends React.Component {

  render() {
    return(
      <div className="friend-name">
        <div className="friend-items">{this.props.friend.name}</div>
      </div>
    )
  }
}

FriendName.propTypes = {
  friend: PropTypes.object.isRequired,
};
