import React from 'react';
import scissors from './assets/you-scissors.png';
import paper from './assets/you-paper.png';
import rock from './assets/you-rock.png';

const Player = ({ weapon }) => (
  <>
    <div className='player'>
      <div className='playerName'>YOU</div>
      <img
        className='player-image'
        src={
          weapon === 'rock' ? rock : weapon === 'scissors' ? scissors : paper
        }
        alt='Rock Paper Scissors'
      />
    </div>
  </>
);

export default Player;
