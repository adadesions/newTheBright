import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class StudentItemsApprove extends React.Component {

  componentDidMount() {

  }

  render() {
    return(
      <li>
        <div className="collapsible-header"><i className="material-icons approve-icon">verified_user</i>{this.props.names.fullName}</div>
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
        </div>
      </li>
    )
  }
}

StudentItemsApprove.propTypes = {
  names: PropTypes.object.isRequired,
};
