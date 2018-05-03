import React, { Component } from 'react';
import {goodThings, badThing} from './things';
import {Things} from './ThingsRenderer';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      weights: goodThings.map(() => 1 / goodThings.length),
      locks: goodThings.map(() => false),
    }
  }

  render() {
      return (
      <div>
        <h1><b>57 Milliarden Euro</b> will die Bundesregierung Zukünftig für Rüstung ausgeben. Das sind:</h1>
        <Things 
          amounts={this.state.weights.map(v => v * 57000000000)} 
          locks={this.state.locks}
          things={goodThings}
          
          onLock={setIndex => {
            this.setState({locks: this.state.locks.map((v, i) => i === setIndex ? !v : v)})
          }}

          onIncrease={index => {
            const toIncrease = 0.05;
            const nonLocked = this.state.locks
              .filter((_, i) => this.state.weights[i] > 1e-10 && index !== i)
              .filter(l => !l)
              .length;
            this.setState({weights: this.state.weights.map((v, i) => {
              if(i === index && nonLocked > 0) {
                return v + toIncrease;
              } else if(!this.state.locks[i] && this.state.weights[i] >= 1e-10 && i !== index) {
                return v - (toIncrease / nonLocked);
              } else {
                return v;
              }
            })})
          }}
          onDecrease={index => {
            const toDecrease = 0.05;
            if(this.state.weights[index] <= 1e-10) {
              return;
            }
            const nonLocked = this.state.locks
              .filter((_, i) => index !== i)
              .filter(l => !l)
              .length;
            this.setState({weights: this.state.weights.map((v, i) => {
              if(i === index && nonLocked > 0) {
                return v - toDecrease;
              } else if(!this.state.locks[i] && i !== index) {
                return v + (toDecrease / nonLocked);
              } else {
                return v;
              }
            })})
          }}
        />

        <h2>... Oder Einmal der Rüstungsetat Deutschlands.</h2>
        <Things amounts={[]} things={[badThing]} locks={[]} />
      </div>
    );
  }
}
