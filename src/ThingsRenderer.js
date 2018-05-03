import React, { Component } from 'react';
import lock_icon from '../assets/lock.svg'


export function Thing(props) {
  const { amount, thing, lock, onIncrease, onDecrease, onLock } = props;

  return (
    <div className='thing'>
      <img src={thing.icon} />
      <p><b>{amount ? Math.round((amount < 0 ? 0 : amount) / thing.cost) : ''}</b> {thing.text}</p>
      <div className='buttons'>
        <div onClick={onIncrease}>+</div>
        <div onClick={onLock} className={lock ? 'locked' : ''}><img src={lock_icon}/></div>
        <div onClick={onDecrease}>-</div>
      </div>
    </div>
  )
}

export function Things(props) {
  const { amounts, things, locks, onIncrease, onDecrease, onLock } = props;

  return (
    <div className='thingsContainer'>
      {things.map((thing, i) => (
        <Thing
          amount={amounts[i]}
          lock={locks[i]}
          thing={thing}

          onIncrease={() => onIncrease(i)}
          onDecrease={() => onDecrease(i)}
          onLock={() => onLock(i)}

          key={i} />
      ))}
    </div>
  )
}