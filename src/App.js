import React, { Component } from 'react';
import {goodThings, badThing} from './things';
import {Things} from './ThingsRenderer';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counts: []
    }

    let money = 57000000000;
    while(money>0) {
      const choice = Math.round(Math.random() * (goodThings.length - 1));
      this.state.counts[choice] = this.state.counts[choice] ? this.state.counts[choice] + 1 : 1;
      money -= goodThings[choice].cost;
    }
  }

  render() {
    return (
      <div>
        <h1><b>57 Milliarden Euro</b> will die Bundesregierung Zukünftig für Rüstung ausgeben. Das sind:</h1>
        <Things counts={this.state.counts} things={goodThings} />

        <h2>... Oder Einmal der Rüstungsetat Deutschlands.</h2>
        <Things counts={[]} things={[badThing]} />
      </div>
    );
  }
}
