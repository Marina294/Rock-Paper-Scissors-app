import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player1 from "./player1";
import Player2 from "./player2";
import "./styles.css";
import { motion } from "framer-motion";

const weapons = ["rock", "paper", "scissors"];
class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
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
      return "DRAW  :0";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "YOU WIN !  :D";
    } else {
      return "YOU LOSE  :'( ";
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <div className='wrap'>
        <motion.h1
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
        Rock Paper Meow
        </motion.h1>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <div className="players">
            <Player1 weapon={playerOne} />
            <Player2 weapon={playerTwo} />
          </div>
        </motion.div>
        <div className="weaponBtns">
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1.2 }}
        >
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("rock")}
          >
            rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("paper")}
          >
            paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("scissors")}
          >
            meow
          </button>
        </motion.div>
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.9 }} 
        >
          <button type="button" onClick={this.startGame}>
            Start!
          </button>
        </motion.div>
        <footer className="footer">
      <div>
        Rock Paper Meow by &nbsp; 
        <a target="_blank" rel="noreferrer" href="https://github.com/Marina294?tab=repositories" >Marina</a>
      </div>
    </footer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

