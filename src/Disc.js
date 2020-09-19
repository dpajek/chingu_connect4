/* eslint-disable class-methods-use-this */
import React from 'react';
import './Disc.css';

function Disc(props) {
  const { colour, onClick } = props;

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

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      tabIndex="0"
      className="disc-blue"
      onClick={onClick}
      // onKeyDown={onClick} // need for accessibility
    >
      {disc}
    </div>
  );
}

export default Disc;
