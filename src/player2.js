import React from 'react';
import scissors from './assets/cat-scissors.png';
import paper from './assets/cat-paper.png';
import rock from './assets/cat-rock.png';

const Player = ({ weapon }) => (
    <div className='player'>
      <div className='playerName'>Cat</div>
      <img
        className='player-image'
        src={
          weapon === 'rock' ? rock : weapon === 'scissors' ? scissors : paper
        }
        alt='Rock Paper Scissors'
      />
    </div>
);

export default Player;
