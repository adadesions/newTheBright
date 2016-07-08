import React from 'react';

export default class TwitterBox extends React.Component {
  componentDidMount() {
    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));

    twttr.widgets.load()
  }

  render() {
    return(
      <div>
        <a className="twitter-timeline"
          data-widget-id="600720083413962752"
          href="https://twitter.com/thebrighttwit"
          data-chrome="nofooter noborders">
          Tweets by @thebrighttwit
        </a>
      </div>
    )
  }
}
