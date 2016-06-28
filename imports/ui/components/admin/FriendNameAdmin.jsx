import React, { PropTypes } from 'react';

export default class FriendNameAdmin extends React.Component {

  render() {
    return(
      <div className="friend-name-admin">
        <div>{this.props.friendname.name}</div>
      </div>
    )
  }
}

FriendNameAdmin.propTypes = {
  friendname: PropTypes.object.isRequired,
};
