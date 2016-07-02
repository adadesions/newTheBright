import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

// Components
import FriendNameAdmin from './FriendNameAdmin.jsx';

export default class StudentItems extends React.Component {
  constructor(props) {
    super(props);
    this.onClickApprove = this.onClickApprove.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickApprove() {
    Students.update(
      { "_id" : this.props.names._id },
      { $set: { "approve": "yes" } }
    )
  }

  onClickRemove() {
    Students.remove({ "_id" : this.props.names._id })
  }

  renderFriend() {
    return this.props.names.friendName.map((friendname) => {
      return <FriendNameAdmin key={friendname.stbid} friendname={friendname}  />
    })
  }

  render() {
    return(
      <li className="student-item">
        <div className="collapsible-header">
          <div className="approve-btn">
            <a onClick={this.onClickApprove} className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">spellcheck</i></a>
          </div>
          <div>
            <i className="material-icons">supervisor_account</i>{this.props.names.tb_id}
          </div>
          <div className="remove-btn">
            <a onClick={this.onClickRemove} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">delete</i></a>
          </div>
        </div>
        <div className="collapsible-body">
          <div>ชื่อ : {this.props.names.fullName}</div>
          <div>จังหวัด : {this.props.names.province}</div>
          <div>โรงเรียน : {this.props.names.schoolName}</div>
          <div>ชั้นปี : {this.props.names.sClass}</div>
          <div>สาย : {this.props.names.program}</div>
          <div>ที่อยู่ : {this.props.names.address}</div>
          <div>เบอร์โทร : {this.props.names.tel}</div>
          <div>อีเมล์ : {this.props.names.email}</div>
          <div>ชื่อผู้ปกครอง : {this.props.names.parentsName}</div>
          <div>เบอร์โทรผู้ปกครอง : {this.props.names.parentsTel}</div>
          <div>ชื่อเพื่อนในกลุ่ม {this.renderFriend()}</div>
          <hr/>
          <div>ช่องทางการจ่าย : {this.props.names.optionPayment}</div>
          <div>วันที่จ่าย : {this.props.names.date}</div>
          <div>เวลาที่จ่าย : {this.props.names.time}</div>
          <div>จำนวนเงิน : {this.props.names.amount}</div>
        </div>
      </li>
    )
  }
}

StudentItems.propTypes = {
  names: PropTypes.object.isRequired,
};
