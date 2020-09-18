/* eslint-disable class-methods-use-this */
import React from 'react';
import './App.css';

function App() {
  return (
    <center>
      <div className="App">
        <StatusDisplay />
        <Board />
      </div>
    </center>
  );
}

function StatusDisplay() {
  return <div className="status">The status message</div>;
}

function Disc(props) {
  const { colour } = props;

  let disc = <div className="disc-white" />;

  if (colour === 'Y')
    disc = (
      <div className="disc-border-Y">
        <div className="disc-middle-Y" />
      </div>
    );
  else if (colour === 'R')
    disc = (
      <div className="disc-border-R">
        <div className="disc-middle-R" />
      </div>
    );
  else disc = <div className="disc-white" />;

  return <div className="disc-blue">{disc}</div>;
}

class Board extends React.Component {
  renderDisc(colour) {
    return <Disc colour={colour} />;
  }

  render() {
    const R = 'R';
    const Y = 'Y';
    return (
      <div>
        <div className="board">
          {this.renderDisc()}
          {this.renderDisc(R)}
          {this.renderDisc(R)}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc(Y)}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc(Y)}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc(R)}
          {this.renderDisc(R)}
          {this.renderDisc(R)}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
          {this.renderDisc()}
        </div>
        <br />
        <button type="button" className="reset-button">
          Reset
        </button>
      </div>
    );
  }
}

export default App;
