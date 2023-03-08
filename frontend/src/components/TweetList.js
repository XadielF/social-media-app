// a component that displays a list of tweets
// frontend/src/components/TweetList.js

import React from 'react';
import Tweet from './Tweet';

function TweetList(props) {
  return (
    <div>
      {props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
    </div>
  );
}

export default TweetList;
