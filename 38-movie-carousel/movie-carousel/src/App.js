import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Carousel from './components/Carousel'

import coco from './img/coco.jpg'
import coco_identical from './img/coco_identical.jpg'
import coco_png from './img/coco.png'

import incred from './img/incredibles.jpg'
import lionking from './img/lionking.jpg'
import mermaid from './img/mermaid.jpg'
import moana from './img/moana.jpg'
import nemo from './img/nemo.jpeg'
import princess from './img/princess.jpg'

const IMAGES = [
  coco, incred, lionking, mermaid, moana, nemo, princess
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Carousel items={IMAGES} />
        </div>
      </div>
    );
  }
}

export default App;
