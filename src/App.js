/* eslint-disable class-methods-use-this */
import React from 'react';
import './App.css';
import Board from './Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameGrid: Array(42).fill(null),
      p1IsNext: true,
    };
  }

  handleClick(i) {
    if (this.determineWinner() !== null) return;

    const { gameGrid, p1IsNext } = this.state;
    const newGameGrid = gameGrid.slice();

    const discIndex = this.findOpenSpace(i);

    if (discIndex < 0) return;

    newGameGrid[discIndex] = p1IsNext ? 'R' : 'Y';

    this.setState({
      gameGrid: newGameGrid,
      p1IsNext: !p1IsNext,
    });
  }

  determineWinner() {
    const { gameGrid } = this.state;

    // Search for horizontal wins
    for (let row = 0; row < 6; row += 1)
      for (let col = 0; col < 4; col += 1) {
        const firstIndex = row * 7 + col;
        if (
          gameGrid[firstIndex] !== null &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 1] &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 2] &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 3]
        )
          return gameGrid[firstIndex];
      }

    // Search for vertical wins
    for (let row = 0; row < 3; row += 1)
      for (let col = 0; col < 7; col += 1) {
        const firstIndex = row * 7 + col;
        if (
          gameGrid[firstIndex] !== null &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 7] &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 14] &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 21]
        )
          return gameGrid[firstIndex];
      }

    // Search for diag-down wins
    for (let row = 0; row < 3; row += 1)
      for (let col = 0; col < 4; col += 1) {
        const firstIndex = row * 7 + col;
        if (
          gameGrid[firstIndex] !== null &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 8] &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 16] &&
          gameGrid[firstIndex] === gameGrid[firstIndex + 24]
        )
          return gameGrid[firstIndex];
      }

    // Search for diag-up wins
    for (let row = 2; row < 6; row += 1)
      for (let col = 0; col < 4; col += 1) {
        const firstIndex = row * 7 + col;
        if (
          gameGrid[firstIndex] !== null &&
          gameGrid[firstIndex] === gameGrid[firstIndex - 6] &&
          gameGrid[firstIndex] === gameGrid[firstIndex - 12] &&
          gameGrid[firstIndex] === gameGrid[firstIndex - 18]
        )
          return gameGrid[firstIndex];
      }

    return null;
  }

  handleReset() {
    this.setState({
      gameGrid: Array(42).fill(null),
      p1IsNext: true,
    });
  }

  findOpenSpace(i) {
    const column = i % 7;
    const { gameGrid } = this.state;

    for (let row = 5; row >= 0; row -= 1)
      if (gameGrid[row * 7 + column] === null) return row * 7 + column;

    return -1;
  }

  render() {
    const { gameGrid, p1IsNext } = this.state;

    return (
      <center>
        <div className="App">
          <StatusDisplay p1IsNext={p1IsNext} winner={this.determineWinner()} />
          <Board
            gameGrid={gameGrid}
            onClick={(i) => this.handleClick(i)}
            onReset={() => this.handleReset()}
          />
        </div>
      </center>
    );
  }
}

function StatusDisplay(props) {
  const { p1IsNext, winner } = props;
  let statusMessage;
  let statusColour;
  let spinningDisc = (
    <div>
      <br />
      <br />
    </div>
  );

  if (winner === null) {
    statusMessage = `${p1IsNext ? 'Player 1' : 'Player 2'}, select a coin spot`;
    statusColour = p1IsNext ? 'status-R' : 'status-Y';
  } else {
    statusMessage = `${
      winner === 'R' ? 'Player 1' : 'Player 2'
    } is the winner!`;
    statusColour = winner === 'R' ? 'status-R' : 'status-Y';
  }

  if (winner === 'Y')
    spinningDisc = (
      <div className="disc-border-Y spinning-disc">
        <div className="disc-middle-Y" />
      </div>
    );
  else if (winner === 'R')
    spinningDisc = (
      <div className="disc-border-R spinning-disc">
        <div className="disc-middle-R" />
      </div>
    );

  return (
    <center>
      <br />
      {spinningDisc}
      <div className={statusColour}>{statusMessage}</div>
    </center>
  );
}

export default App;
