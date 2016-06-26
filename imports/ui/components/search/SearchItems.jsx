import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

export default class DetailStudent extends React.Component {

  render() {
    return(
      <li className="item-student">
        <div className="collapsible-header">
          <div>
            <i className="material-icons">supervisor_account</i>{this.props.itemnames.fullName}
          </div>
        </div>
      </li>
    )
  }
}

DetailStudent.PropTypes = {
  itemnames: PropTypes.object.isRequired,
};
