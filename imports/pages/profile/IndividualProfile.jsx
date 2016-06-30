import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../api/Students.js';

// Components
import DetailStudent from '../../ui/components/profile/DetailStudent.jsx';

export default class IndividualProfile extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
    });
  }

  renderListStudent(student) {
    if( student ){
      return <DetailStudent student={student} />
    }
  }

  render() {
    return(
      <div className="ind-profile">
        { this.renderListStudent(this.props.student) }
      </div>
    )
  }
}

IndividualProfile.propsTypes = {
  tb_id: PropTypes.string.isRequired,
}

export default createContainer((props) => {
  const params = props.tb_id;
  let student = Students.findOne({'tb_id': params});
  return {
    student,
  };
}, IndividualProfile);
