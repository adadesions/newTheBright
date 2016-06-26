import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../../../api/Students.js';

export default class DetailStudent extends React.Component {

  onCLickStudent() {
    FlowRouter.go('profile');
  }

  render() {
    return(
      <li onClick={this.onCLickStudent} className="item-student">
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
