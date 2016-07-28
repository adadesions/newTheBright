import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  onClickSearch() {
    const id_search = this.refs.search.value;
    FlowRouter.go('search/'+ id_search +'');
  }

  render() {
    return(
      <div>
        <div className="input-field col l11 s10">
          <input id="search" ref="search" type="text" className="validate"/>
        </div>
        <div className="col l1 s2 btn-search">
          <a onClick={this.onClickSearch} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">search</i></a>
        </div>
      </div>
    )
  }
}
