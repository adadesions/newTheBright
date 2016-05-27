import React from 'react';

export default class ItemPoster extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }

  render() {
    return(
      <div>
        <img className="materialboxed" width="100%" src="images/mainpage/test.jpg"/>
      </div>
    )
  }
}
