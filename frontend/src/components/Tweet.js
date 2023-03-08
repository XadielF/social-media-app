//a component that displays a single tweet
import React from 'react';

function Tweet(props) {
  return (
    <div>
      <img src={props.author.avatarUrl} alt={props.author.name} />
      <div>
        <h3>{props.author.name}</h3>
        <p>{props.text}</p>
        <p>{props.createdAt.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Tweet;
