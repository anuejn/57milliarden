import React, { Component } from 'react';
import {goodThings, badThing} from './things';
import {Things} from './ThingsRenderer';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counts: []
    }
  }

  render() {
    return (
      <div>
        <h1><b>57 Milliarden Euro</b> will die Bundesregierung Zukünftig für Rüstung ausgeben. Das sind:</h1>
        <Things counts={this.state.counts} things={goodThings} />

        <h2>... Oder Einmal den Rüstungsetat Deutschlands?!</h2>
        <Things counts={[]} things={[badThing]} />
      </div>
    );
  }
}
