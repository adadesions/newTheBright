import React from 'react';

export default class FacebookBox extends React.Component {
  componentDidMount() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  render() {
    return(
      <div>
        <div id="fb-root"><div className="fb-page z-depth-1" data-href="https://www.facebook.com/thebrightofficial" data-tabs="timeline" data-width="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/thebrightofficial" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/thebrightofficial">TheBright สถาบันกวดวิชาเดอะไบร์ท</a></blockquote></div></div>
      </div>
    )
  }
}
