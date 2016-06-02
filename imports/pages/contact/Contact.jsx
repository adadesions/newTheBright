import React from 'react';

// Component
import ItemPoster from '../../ui/components/mainpage/ItemPoster.jsx';
export default class Contact extends React.Component {
  componentDidMount() {
    $(document).ready(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }

  getItemPoster() {
    return [
      { _id: 1, src: '/images/contact/contact.jpg'}
    ];
  }

  renderposter() {
    return this.getItemPoster().map((picture) => (
      <ItemPoster key={picture._id} picture={picture} />
    ));
  }

  render() {
    return(
      <div className="contact">
        {this.renderposter()}
      </div>
    )
  }
}
