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
      searchId: "",
    }
    this.onClickSearch = this.onClickSearch.bind(this);
  }
  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });

      $('body,html').animate({
        scrollTop: 0
      }, 800);
    })
  }

  onClickSearch() {
    const id = this.refs.search.value;
    this.setState({
      searchId: id,
    })
  }

  renderListSearch() {
    const searchId = this.state.searchId;
    if(searchId) {
      return this.props.items.map((item) => {
        if(item.tb_id === searchId) {
          return <SearchItems key={item._id} item={item} />
        }
      });
    }
    else if(!searchId) {
      return this.props.items.map((item) => {
          return <SearchItems key={item._id} item={item} />
      });
    }
  }

  render() {
    return(
      <div className="search-page">
        <div className="row search-container">
          <div className="col l12 s12 search-bar">
            <div className="input-field col l11 s10">
              <input id="search" ref="search" type="text" className="validate"/>
            </div>
            <div className="col l1 s2 btn-search">
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
    items: Students.find({}, {
      sort: {tb_id: 1}
    }).fetch(),
  };
}, SearchID);
