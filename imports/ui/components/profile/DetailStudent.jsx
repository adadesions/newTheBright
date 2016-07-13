import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

export default class DetailStudent extends React.Component {
  constructor(props) {
    super(props);
    this.printSmart = this.printSmart.bind(this);
  }

  printSmart() {
    FlowRouter.go('/profile/smartpass/'+ this.props.student.tb_id +'');
  }

  renderStatus() {
    if(this.props.student.approve === "yes") {
      return <span className="text-approve active">{this.props.student.approve}</span>
    }else {
      return <span className="text-approve">{this.props.student.approve}</span>
    }
  }

  render() {
    return(
      <div className="ind-profile-detail">
        <h3>ข้อมูลส่วนตัว</h3>
        <hr className="line-header"/>
        <div><h5>The Bright ID :</h5> <span>{this.props.student.tb_id}</span></div>
        <div><h5>ชื่อ :</h5> <span>{this.props.student.fullName}</span>
        {/*<a onClick={this.printSmart} href="">Print</a>*/}
        </div>
        <div><h5>จังหวัด :</h5> <span>{this.props.student.province}</span></div>
        <div><h5>โรงเรียน :</h5> <span>{this.props.student.schoolName}</span></div>
        <div><h5>ชั้นปี :</h5> <span>{this.props.student.sClass}</span></div>
        <div><h5>สาย :</h5> <span>{this.props.student.program}</span></div>
        <div><h5>ที่อยู่ :</h5> <span>{this.props.student.address}</span></div>
        <div><h5>เบอร์โทร :</h5> <span>{this.props.student.tel}</span></div>
        <div><h5>อีเมล์ :</h5> <span>{this.props.student.email}</span></div>
        <div><h5>ชื่อผู้ปกครอง :</h5> <span>{this.props.student.parentsName}</span></div>
        <div><h5>เบอร์โทรผู้ปกครอง :</h5> <span>{this.props.student.parentsTel}</span></div>
        <hr className="line-section"/>
        <div><h5>Status :</h5> {this.renderStatus()} </div>
        <hr className="line-section"/>
        <div><h5>Checkin :</h5> <span></span></div>
        {/*<hr className="line-section"/>
        <div><h5>slip :</h5> <img src={this.props.student.slip}/></div>*/}
      </div>
    )
  }
}

DetailStudent.propTypes = {
  student: PropTypes.object.isRequired,
};
