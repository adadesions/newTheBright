import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../api/Students.js';

// Components
import DetailGroupStudents from '../../ui/components/profile/DetailGroupStudents.jsx';

export default class GroupProfile extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
    });
  }

  renderListStudent(student) {
    if( student ){
      return <DetailGroupStudents student={student} />
    }
  }

  render() {
    return(
      <div className="ind-profile">
        { this.renderListStudent(this.props.student) }
        <img src={this.props.slip} />
      </div>
    )
  }
}

GroupProfile.propsTypes = {
  tb_id: PropTypes.string.isRequired,
}

export default createContainer((props) => {
  const params = props.tb_id;
  let student = Students.findOne({'tb_id': params});
  let slip = student ? student.slip : "";
  return {
    student,
    slip
  };
}, GroupProfile);
