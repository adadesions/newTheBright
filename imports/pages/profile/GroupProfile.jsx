import React from 'react';
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

  renderListStudent() {
    return this.props.students.map((students) => (
      <DetailGroupStudents key={students._id} students={students} />
    ));
  }

  render() {
    return(
      <div className="ind-profile">
        {this.renderListStudent()}
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    students: Students.find({"_id": "TBK"}).fetch(),
  };
}, GroupProfile);
