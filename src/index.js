import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Player1 from './player1';
import Player2 from './player2';
import './styles.css';
import Icon from './assets/icon-rock.png';

const weapons = ['rock', 'paper', 'scissors'];
class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ''
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ''
      });
      if (counter > 10) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (playerOne === 'rock' && playerTwo === 'scissors') ||
      (playerOne === 'scissors' && playerTwo === 'paper') ||
      (playerOne === 'paper' && playerTwo === 'rock')
    ) {
      return 'You Win!';
    } else {
      return 'Cat Wins!';
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ''
    });
  };
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Rock Paper Scissors with Cat</h1>

        <div>
          <Player1 weapon={playerOne} />
          <div className='winner'>{winner ? this.selectWinner() : null}</div>
          <Player2 weapon={playerTwo} />
        </div>
        <div className='weaponBtns'>
          <button 
            className='weaponBtn'
            onClick={() => this.selectWeapon('rock')}
          >
            rock
            {/* <img className='icon' src={Icon}  alt="icon-rock" /> */}
          </button>
          <button
            className='weaponBtn'
            onClick={() => this.selectWeapon('paper')}
          >
            paper
          </button>
          <button
            className='weaponBtn'
            onClick={() => this.selectWeapon('scissors')}
          >
            scissor
          </button>
        </div>
        {/* <div className='winner'>{winner ? this.selectWinner() : null}</div> */}
        <button type='button' onClick={this.startGame}>
          Start!
        </button>
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
