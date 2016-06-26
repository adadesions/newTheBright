import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Students } from '../api/Students.js';

// Components
import SearchItems from '../ui/components/search/SearchItems.jsx';

export default class SearchID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    }
    this.onClickSearch = this.onClickSearch.bind(this);
  }
  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });
  }

  onClickSearch() {
    const id = this.refs.search.value;
    this.setState({
      click: 1,
    })
  }

  renderListSearch() {
    return this.props.itemsSearch.map((itemnames) => (
      <SearchItems key={itemnames._id} itemnames={itemnames} />
    ));
    // if(this.state.click = 1){
    //   return this.props.itemsSearch.map((itemnames) => (
    //     <SearchItems key={itemnames._id} itemnames={itemnames} />
    //   ));
    // }
    // else{
    //   return this.props.items.map((itemnames) => (
    //     <SearchItems key={itemnames._id} itemnames={itemnames} />
    //   ));
    // }
  }

  render() {
    return(
      <div className="search-page">
        <div className="row search-container">
          <div className="col l12 search-bar">
            <div className="input-field col l11">
              <input id="search" ref="search" type="text" className="validate"/>
            </div>
            <div className="col l1 btn-search">
              <a onClick={this.onClickSearch} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">search</i></a>
            </div>
          </div>
        </div>
        <ul className="collapsible popout" data-collapsible="accordion">
          {this.renderListSearch()}
        </ul>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    items: Students.find({}).fetch(),
    itemsSearch: Students.find({"fullName": "phitsanulok"}).fetch(),
  };
}, SearchID);
