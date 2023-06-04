import './assets/styles/style.css';
import defaultDataset from './dataset';
import React from 'react';

export default class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open:false
    }
  }

  render() {
    return (
      <section className='c-section'>
        <div className='c-box'></div>
      </section>
    );
  }

  
}