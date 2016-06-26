import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

export default class DetailStudent extends React.Component {

  render() {
    return(
      <div className="ind-profile-detail">
        <h3>ข้อมูลกลุ่ม</h3>
        <div><h5>ชื่อ :</h5> <h5>{this.props.students.fullName}</h5></div>
        <div><h5>ชื่อ :</h5> <h5>{this.props.students.friendName[0]}</h5></div>
        <div><h5>ชื่อ :</h5> <h5>{this.props.students.friendName[1]}</h5></div>
        <div><h5>ชื่อ :</h5> <h5>{this.props.students.friendName[2]}</h5></div>
        <div><h5>ชื่อ :</h5> <h5>{this.props.students.friendName[3]}</h5></div>
        <div><h5>จังหวัด :</h5> <h5>{this.props.students.province}</h5></div>
        <div><h5>โรงเรียน :</h5> <h5>{this.props.students.schoolName}</h5></div>
        <div><h5>ชั้นปี :</h5> <h5>{this.props.students.sClass}</h5></div>
        <div><h5>สาย :</h5> <h5>{this.props.students.program}</h5></div>
        <div><h5>ที่อยู่ :</h5> <h5>{this.props.students.address}</h5></div>
        <div><h5>เบอร์โทร :</h5> <h5>{this.props.students.tel}</h5></div>
        <div><h5>อีเมล์ :</h5> <h5>{this.props.students.email}</h5></div>
        <div><h5>ชื่อผู้ปกครอง :</h5> <h5>{this.props.students.parentsName}</h5></div>
        <div><h5>เบอร์โทรผู้ปกครอง :</h5> <h5>{this.props.students.parentsTel}</h5></div>
        <hr/>
        <div><h5>Status :</h5> <h5>{this.props.students.approve}</h5></div>
        <hr/>
        <div><h5>Checkin :</h5> <h5>{this.props.students.parentsTel}</h5></div>
      </div>
    )
  }
}

DetailStudent.propTypes = {
  students: PropTypes.object.isRequired,
};
