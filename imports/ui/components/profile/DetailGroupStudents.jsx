import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

// Components
import FriendName from './FriendName.jsx';

export default class DetailStudent extends React.Component {
  constructor(props) {
    super(props);
    this.printSmart = this.printSmart.bind(this);
    this.renderFriend = this.renderFriend.bind(this);
  }

  renderFriend() {
    return this.props.student.friendName.map((friend) => {
      return <FriendName key={friend.stbid} friend={friend}  />
    })
  }

  printSmart() {
    FlowRouter.go('/profile/smartpass/'+ this.props.student.tb_id +'');
  }


  render() {
    return(
      <div className="ind-profile-detail">
        <h3>ข้อมูลกลุ่ม</h3>
        <div><h5>ชื่อ :</h5> <h5>{this.props.student.fullName}</h5> <a onClick={this.printSmart} href="">Print</a></div>
        <div><h5>ชื่อเพื่อน : </h5><h5>{this.renderFriend()}</h5></div>
        <div><h5>จังหวัด :</h5> <h5>{this.props.student.province}</h5></div>
        <div><h5>โรงเรียน :</h5> <h5>{this.props.student.schoolName}</h5></div>
        <div><h5>ชั้นปี :</h5> <h5>{this.props.student.sClass}</h5></div>
        <div><h5>สาย :</h5> <h5>{this.props.student.program}</h5></div>
        <div><h5>ที่อยู่ :</h5> <h5>{this.props.student.address}</h5></div>
        <div><h5>เบอร์โทร :</h5> <h5>{this.props.student.tel}</h5></div>
        <div><h5>อีเมล์ :</h5> <h5>{this.props.student.email}</h5></div>
        <div><h5>ชื่อผู้ปกครอง :</h5> <h5>{this.props.student.parentsName}</h5></div>
        <div><h5>เบอร์โทรผู้ปกครอง :</h5> <h5>{this.props.student.parentsTel}</h5></div>
        <hr/>
        <div><h5>Status :</h5> <h5>{this.props.student.approve}</h5></div>
        <hr/>
        <div><h5>Checkin :</h5> <h5>{this.props.student.parentsTel}</h5></div>
      </div>
    )
  }
}

DetailStudent.propTypes = {
  student: PropTypes.object.isRequired,
};
