import React from 'react';

// Component
import ItemPoster from '../../ui/components/mainpage/ItemPoster.jsx';
export default class Gallery extends React.Component {

  getItemPoster() {
    return [
      { _id: 1, src: '/images/course/camp2015/comingsoon.jpg'}
    ];
  }

  renderposter() {
    return this.getItemPoster().map((picture) => (
      <ItemPoster key={picture._id} picture={picture} />
    ));
  }

  render() {
    return(
      <div className="gallery">
        {this.renderposter()}
      </div>
    )
  }
}
