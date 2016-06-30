import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

// Components
import FriendNameAdmin from './FriendNameAdmin.jsx';

export default class StudentItemsApprove extends React.Component {

  constructor(props) {
    super(props);
    this.onClickRemoveApprove = this.onClickRemoveApprove.bind(this);
  }

  onClickRemoveApprove() {
    Students.remove({ "_id" : this.props.names._id })
  }

  renderFriend() {
    return this.props.names.friendName.map((friendname) => {
      return <FriendNameAdmin key={friendname.stbid} friendname={friendname}  />
    })
  }

  render() {
    return(
      <li>
        <div className="collapsible-header"><i className="material-icons approve-icon">verified_user</i>{this.props.names.fullName}
          <div className="remove-btn">
            <a onClick={this.onClickRemoveApprove} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">delete</i></a>
          </div>
        </div>
        <div className="collapsible-body">
          <div>จังหวัด : {this.props.names.province}</div>
          <div>โรงเรียน : {this.props.names.schoolName}</div>
          <div>ชั้นปี : {this.props.names.sClass}</div>
          <div>สาย : {this.props.names.program}</div>
          <div>ที่อยู่ : {this.props.names.address}</div>
          <div>เบอร์โทร : {this.props.names.tel}</div>
          <div>อีเมล์ : {this.props.names.email}</div>
          <div>ชื่อผู้ปกครอง : {this.props.names.parentsName}</div>
          <div>เบอร์โทรผู้ปกครอง : {this.props.names.parentsTel}</div>
          <div>ชื่อเพื่อนในกลุ่ม : {this.renderFriend()}</div>
        </div>
      </li>
    )
  }
}

StudentItemsApprove.propTypes = {
  names: PropTypes.object.isRequired,
};
