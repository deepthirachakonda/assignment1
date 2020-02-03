import React, { Component } from 'react';
import '../public/css/app.css';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="container-inner-wrapper">
            <h1>Deepthi Rachakonda</h1>
            <img src="./pic.jpg" className="pic" alt="logo"/>
            <p>Hi everyone, I'm Deepthi Rachakonda, i'm interested in learning upcoming technologies that includes various CS fields such as front end, back end web technologies, data visualization etc. I've worked with Metrix labs as data analyst for 2 years. I enjoy cooking, hiking in my free time. </p>
            <a className="button" href="https://github.com/deepthirachakonda">View my github Profile</a>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));