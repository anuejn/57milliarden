import React, { Component } from 'react';

export function Thing(props) {
  const {count, thing} = props;

  return (
    <div className='thing'>
      <img src={thing.icon}/>
      <p><b>{count}</b> {thing.text}</p>
    </div>
  )
}

export function Things(props) {
  const {counts, things} = props;
  
  return (
    <div className='thingsContainer'>
      {things.map((thing, i) => (
        <Thing count={counts[i]} thing={thing} key={i} />
      ))}
    </div>
  )
}