import React, { Component } from "react";
import "./App.css";
import {
  Navbar,
  NavbarBrand,
  Button,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavbarToggler
} from "reactstrap";
import { FaLinkedin, FaGithubSquare, FaCodepen } from "react-icons/fa";
import { IconContext } from "react-icons";

var btn1Classes = "btn1";
var btn2Classes = "btn2";
var btn3Classes = "btn3";
var btn4Classes = "btn4";
var btn5Classes = "btn5";
var btn6Classes = "btn6";
var btn7Classes = "btn7";
var btn8Classes = "btn8";
var btn9Classes = "btn9";

function returnLastClass(classes) {
  var classesArray = classes.split(" ");
  return classesArray.pop();
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      count: 0, //this counts the number of moves
      winner: false, // this turns to true when we get a winner
      dataArray: [
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"]
      ], //this is the array which contains all the data
      player: 0, //this toggels between player 1 and playesr 2
      play: 0, //this checks if the game is ON or OFF. if someone wins the game is turned OFF.
      draw: false, //this checks if the match is draw or not
      whiteScore: 0, //keeps cunt of the score of white
      blackScore: 0, //keeps track od black score
      memoryArray: [] //keeps track of which elements have been
    };
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  toggleNavbar = () => this.setState({ collapsed: !this.state.collapsed });

  play(btn) {
    var resBox = document.getElementById("res");
    // resbox is the div whisch displays the result after each game.
    if (this.state.play == 0) {
      // play turns to 1 when there is a winner and when we start a new game, play turns to 0
      if (this.state.player == 0) {
        // this checks which player is playing 0 means white and 1 means black
        this.setState({ player: 1 });
        if (this.state.count < 9) {
          // this checks if all 9 boxes are filled, if all boxes are not filled then game will continue, if all boxes are filled then we check if there is a winner or not, if there is no winner then mach is declayered draw
          console.log("if statement 11");
          this.setState({ count: this.state.count + 1 });
          if (!this.state.winner) {
            // this checks if a playes has won the game if not the game will continue
            console.log("if statement 21");
            var arr = this.state.dataArray;
            if (
              (arr[0][0] === arr[0][1] && arr[0][0] === arr[0][2]) ||
              (arr[1][0] === arr[1][1] && arr[1][0] === arr[1][2]) ||
              (arr[2][0] === arr[2][1] && arr[2][0] === arr[2][2]) ||
              (arr[0][0] === arr[1][0] && arr[0][0] === arr[2][0]) ||
              (arr[0][1] === arr[1][1] && arr[0][1] === arr[2][1]) ||
              (arr[0][2] === arr[1][2] && arr[0][2] === arr[2][2]) ||
              (arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) ||
              (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0])
            ) {
              // this is how we check for the winner, there are 8 ways of winning the game, all 8 are verified above. if there is no winner we go to the else statement whre the game continues
              console.log("white wins");
              this.setState({
                winner: true,
                whiteScore: this.state.whiteScore + 1
              });
              this.setState({ play: 1 });
            } else {
              // here classes are addded too the buttons and valued are inserted in the data araay
              console.log("else statement 18");
              var value = btn.target.value;
              if (value == 1) {
                // btn 1
                arr[0][0] = 0;
                console.log(arr);
                btn1Classes = "btn1 btn-light";
                document.getElementById("1").setAttribute("disabled", true);
              } else if (value == 2) {
                // btn 2
                arr[0][1] = 0;
                console.log(arr);
                btn2Classes = "btn2 btn-light";
                document.getElementById("2").setAttribute("disabled", true);
              } else if (value == 3) {
                // btn 3
                arr[0][2] = 0;
                console.log(arr);
                btn3Classes = "btn3 btn-light";
                document.getElementById("3").setAttribute("disabled", true);
              } else if (value == 4) {
                // btn 4
                arr[1][0] = 0;
                console.log(arr);
                btn4Classes = "btn4 btn-light";
                document.getElementById("4").setAttribute("disabled", true);
              } else if (value == 5) {
                // btn 5
                arr[1][1] = 0;
                console.log(arr);
                btn5Classes = "btn5 btn-light";
                document.getElementById("5").setAttribute("disabled", true);
              } else if (value == 6) {
                // btn 6
                arr[1][2] = 0;
                console.log(arr);
                btn6Classes = "btn6 btn-light";
                document.getElementById("6").setAttribute("disabled", true);
              } else if (value == 7) {
                // btn 7
                arr[2][0] = 0;
                console.log(arr);
                btn7Classes = "btn7 btn-light";
                document.getElementById("7").setAttribute("disabled", true);
              } else if (value == 8) {
                // btn 8
                arr[2][1] = 0;
                console.log(arr);
                btn8Classes = "btn8 btn-light";
                document.getElementById("8").setAttribute("disabled", true);
              } else if (value == 9) {
                // btn 9
                arr[2][2] = 0;
                console.log(arr);
                btn9Classes = "btn9 btn-light";
                document.getElementById("9").setAttribute("disabled", true);
              } else {
                console.log("not working");
              }
              if (
                (arr[0][0] === arr[0][1] && arr[0][0] === arr[0][2]) ||
                (arr[1][0] === arr[1][1] && arr[1][0] === arr[1][2]) ||
                (arr[2][0] === arr[2][1] && arr[2][0] === arr[2][2]) ||
                (arr[0][0] === arr[1][0] && arr[0][0] === arr[2][0]) ||
                (arr[0][1] === arr[1][1] && arr[0][1] === arr[2][1]) ||
                (arr[0][2] === arr[1][2] && arr[0][2] === arr[2][2]) ||
                (arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) ||
                (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0])
              ) {
                // we check for the winner again because dataArray has been updated in the else statement above.
                console.log("white wins");
                this.setState({
                  winner: true,
                  whiteScore: this.state.whiteScore + 1
                });
                this.setState({ play: 1 });
                resBox.innerHTML = "<h3> White Wins</h3>";
              } else if (this.state.count > 7) {
                // this checks for match draw conditions. If the count is 1 less then 8(ie. 1 box is not filled rest all are filled)(count starts from 0) then we say the match os draw
                console.log("Match Draew");
                this.setState({ draw: true });
                resBox.innerHTML = "<h3> Match Draw</h3>";
              }
            }
          }
        } else {
          this.setState({ play: 1 });
          console.log("count up ie 9 in black draw match");
          this.setState({ draw: true });
          resBox.innerHTML = "<h3> Match Draw</h3>";
        }
      } else if (this.state.player == 1) {
        this.setState({ player: 0 });
        if (this.state.count < 9) {
          console.log("if statement 1");
          this.setState({ count: this.state.count + 1 });
          if (!this.state.winner) {
            console.log("if statement 2");
            var arr = this.state.dataArray;
            if (
              (arr[0][0] === arr[0][1] && arr[0][0] === arr[0][2]) ||
              (arr[1][0] === arr[1][1] && arr[1][0] === arr[1][2]) ||
              (arr[2][0] === arr[2][1] && arr[2][0] === arr[2][2]) ||
              (arr[0][0] === arr[1][0] && arr[0][0] === arr[2][0]) ||
              (arr[0][1] === arr[1][1] && arr[0][1] === arr[2][1]) ||
              (arr[0][2] === arr[1][2] && arr[0][2] === arr[2][2]) ||
              (arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) ||
              (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0])
            ) {
              console.log("black wins");
              this.setState({
                winner: true,
                blackScore: this.state.blackScore + 1
              });
              this.setState({ play: 1 });
            } else {
              console.log("else statement 1");
              var value = btn.target.value;
              if (value == 1) {
                arr[0][0] = 1;
                console.log(arr);
                btn1Classes = "btn1 btn-dark";
                document.getElementById("1").setAttribute("disabled", true);
              } else if (value == 2) {
                arr[0][1] = 1;
                console.log(arr);
                btn2Classes = "btn2 btn-dark";
                document.getElementById("2").setAttribute("disabled", true);
              } else if (value == 3) {
                arr[0][2] = 1;
                console.log(arr);
                btn3Classes = "btn3 btn-dark";
                document.getElementById("3").setAttribute("disabled", true);
              } else if (value == 4) {
                arr[1][0] = 1;
                console.log(arr);
                btn4Classes = "btn4 btn-dark";
                document.getElementById("4").setAttribute("disabled", true);
              } else if (value == 5) {
                arr[1][1] = 1;
                console.log(arr);
                btn5Classes = "btn5 btn-dark";
                document.getElementById("5").setAttribute("disabled", true);
              } else if (value == 6) {
                arr[1][2] = 1;
                console.log(arr);
                btn6Classes = "btn6 btn-dark";
                document.getElementById("6").setAttribute("disabled", true);
              } else if (value == 7) {
                arr[2][0] = 1;
                console.log(arr);
                btn7Classes = "btn7 btn-dark";
                document.getElementById("7").setAttribute("disabled", true);
              } else if (value == 8) {
                arr[2][1] = 1;
                console.log(arr);
                btn8Classes = "btn8 btn-dark";
                document.getElementById("8").setAttribute("disabled", true);
              } else if (value == 9) {
                arr[2][2] = 1;
                console.log(arr);
                btn9Classes = "btn9 btn-dark";
                document.getElementById("9").setAttribute("disabled", true);
              } else {
                console.log("not working");
              }
              if (
                (arr[0][0] === arr[0][1] && arr[0][0] === arr[0][2]) ||
                (arr[1][0] === arr[1][1] && arr[1][0] === arr[1][2]) ||
                (arr[2][0] === arr[2][1] && arr[2][0] === arr[2][2]) ||
                (arr[0][0] === arr[1][0] && arr[0][0] === arr[2][0]) ||
                (arr[0][1] === arr[1][1] && arr[0][1] === arr[2][1]) ||
                (arr[0][2] === arr[1][2] && arr[0][2] === arr[2][2]) ||
                (arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) ||
                (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0])
              ) {
                console.log("black wins");
                resBox.innerHTML = "<h3> Black Wins</h3>";
                this.setState({
                  winner: true,
                  blackScore: this.state.blackScore + 1
                });
                this.setState({ play: 1 });
              } else if (this.state.count > 7) {
                console.log("Match Draew");
                this.setState({ draw: true });
                resBox.innerHTML = "<h3> Match Draw</h3>";
              }
            }
          }
        } else {
          this.setState({ play: 1 });
          console.log("count up ie 9 in black, match draw");
          this.setState({ draw: true });
          resBox.innerHTML = "<h3> Match Draw </h3>";
        }
      }
    }
  }

  newGame = () => {
    this.setState({
      count: 0,
      winner: false,
      dataArray: [
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"]
      ],
      player: 0,
      play: 0,
      draw: false,
      memoryArray: []
    });
    console.log("new game btn");
    btn1Classes = "btn1";
    btn2Classes = "btn2";
    btn3Classes = "btn3";
    btn4Classes = "btn4";
    btn5Classes = "btn5";
    btn6Classes = "btn6";
    btn7Classes = "btn7";
    btn8Classes = "btn8";
    btn9Classes = "btn9";
    document.getElementById("1").removeAttribute("disabled");
    document.getElementById("2").removeAttribute("disabled");
    document.getElementById("3").removeAttribute("disabled");
    document.getElementById("4").removeAttribute("disabled");
    document.getElementById("5").removeAttribute("disabled");
    document.getElementById("6").removeAttribute("disabled");
    document.getElementById("7").removeAttribute("disabled");
    document.getElementById("8").removeAttribute("disabled");
    document.getElementById("9").removeAttribute("disabled");
    var resBox = document.getElementById("res");
    resBox.textContent = "";
  };

  reset = () => {
    this.setState({ whiteScore: 0, blackScore: 0 });
    console.log(this.state.whiteScore, this.state.blackScore, "reset game btn");
  };

  render() {
    return (
      <div className="App">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>
            <h2>Tic Tac Toe</h2>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/rishi-singh-b2226415b/">
                  <h2>
                    <IconContext.Provider
                      value={{ color: "white", className: "global-class-name" }}
                    >
                      <FaLinkedin />
                    </IconContext.Provider>
                  </h2>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/rishi-singh26">
                  <h2>
                    <IconContext.Provider
                      value={{ color: "white", className: "global-class-name" }}
                    >
                      <FaGithubSquare />
                    </IconContext.Provider>
                  </h2>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://codepen.io/rishisingh-26/">
                  <h2>
                    <IconContext.Provider
                      value={{ color: "white", className: "global-class-name" }}
                    >
                      <FaCodepen />
                    </IconContext.Provider>
                  </h2>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <h4>By Rishi Singh</h4>
            </NavbarText>
          </Collapse>
        </Navbar>
        <div className="col-8 offset-2 mt-4" id="score">
          <div>
            <h3>White Score: {this.state.whiteScore}</h3>
            <h3>Black Score: {this.state.blackScore}</h3>
          </div>
        </div>
        <br />
        <div className="game col-10 col-xs-4 col-sm-5 col-lg-4 offset-1 offset-xs-3 offset-sm-3 offset-lg-4 p-5 mt-2">
          <div>
            <Button
              className={btn1Classes}
              onClick={this.play}
              value={1}
              id={1}
            ></Button>
            <Button
              className={btn2Classes}
              onClick={this.play}
              value={2}
              id={2}
            ></Button>
            <Button
              className={btn3Classes}
              onClick={this.play}
              value={3}
              id={3}
            ></Button>
          </div>
          <div>
            <Button
              className={btn4Classes}
              onClick={this.play}
              value={4}
              id={4}
            ></Button>
            <Button
              className={btn5Classes}
              onClick={this.play}
              value={5}
              id={5}
            ></Button>
            <Button
              className={btn6Classes}
              onClick={this.play}
              value={6}
              id={6}
            ></Button>
          </div>
          <div>
            <Button
              className={btn7Classes}
              onClick={this.play}
              value={7}
              id={7}
            ></Button>
            <Button
              className={btn8Classes}
              onClick={this.play}
              value={8}
              id={8}
            ></Button>
            <Button
              className={btn9Classes}
              onClick={this.play}
              value={9}
              id={9}
            ></Button>
          </div>
        </div>
        <div>
          <Button className="newGameBtn btn-warning" onClick={this.newGame}>
            New Game
          </Button>
          <Button className="resetScoreBtn btn-danger" onClick={this.reset}>
            Reset Scores
          </Button>
        </div>
        <br />
        <div className="col-8 offset-2" id="res"></div>
      </div>
    );
  }
}

export default App;
