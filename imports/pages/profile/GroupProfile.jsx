import React from 'react';

// Collection
import { Students } from '../../api/Students.js';

export default class GroupProfile extends React.Component {

  componentDidMount() {

  }

  render() {
    return(
      <div className="group-profile">

      </div>
    )
  }
}

// export default createContainer(() => {
//   return {
//     students: Students.find({"_id": ""}).fetch(),
//   };
// }, GroupProfile);
