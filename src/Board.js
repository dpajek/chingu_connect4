/* eslint-disable class-methods-use-this */
import React from 'react';
import './Board.css';
import Disc from './Disc';

class Board extends React.Component {
  renderDisc(i) {
    const { gameGrid, onClick } = this.props;

    return <Disc colour={gameGrid[i]} onClick={() => onClick(i)} />;
  }

  render() {
    const discs = [];
    const { onReset } = this.props;

    for (let i = 0; i < 42; i += 1) discs.push(this.renderDisc(i));

    return (
      <div>
        <div className="board">{discs}</div>
        <br />
        <button type="button" className="reset-button" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Board;
