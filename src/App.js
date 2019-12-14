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
      memoryArray: ["a", "b", "c", "d", "e", "f", "g", "h", "i"] //keeps track of which elements have been
    };
    this.play = this.play.bind(this);
    this.resetButtonComponent = this.resetButtonComponent.bind(this);
  }

  toggleNavbar = () => this.setState({ collapsed: !this.state.collapsed });

  play(btn) {
    if (this.state.play == 0) {
      if (this.state.player == 0) {
        this.setState({ player: 1 });
        if (this.state.count < 9) {
          console.log("if statement 11");
          this.setState({ count: this.state.count + 1 });
          if (!this.state.winner) {
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
              console.log("white wins");
              this.setState({
                winner: true,
                whiteScore: this.state.whiteScore + 1
              });
              this.setState({ play: 1 });
            } else {
              console.log("else statement 18");
              var value = btn.target.value;
              if (value == 1) {
                arr[0][0] = 0;
                console.log(arr);
                var element1 = document.querySelector(".btn1");
                element1.classList.add("btn-light");
              } else if (value == 2) {
                arr[0][1] = 0;
                console.log(arr);
                var element2 = document.querySelector(".btn2");
                element2.classList.add("btn-light");
              } else if (value == 3) {
                arr[0][2] = 0;
                console.log(arr);
                var element3 = document.querySelector(".btn3");
                element3.classList.add("btn-light");
              } else if (value == 4) {
                arr[1][0] = 0;
                console.log(arr);
                var element4 = document.querySelector(".btn4");
                element4.classList.add("btn-light");
              } else if (value == 5) {
                arr[1][1] = 0;
                console.log(arr);
                var element5 = document.querySelector(".btn5");
                element5.classList.add("btn-light");
              } else if (value == 6) {
                arr[1][2] = 0;
                console.log(arr);
                var element6 = document.querySelector(".btn6");
                element6.classList.add("btn-light");
              } else if (value == 7) {
                arr[2][0] = 0;
                console.log(arr);
                var element7 = document.querySelector(".btn7");
                element7.classList.add("btn-light");
              } else if (value == 8) {
                arr[2][1] = 0;
                console.log(arr);
                var element8 = document.querySelector(".btn8");
                element8.classList.add("btn-light");
              } else if (value == 9) {
                arr[2][2] = 0;
                console.log(arr);
                var element9 = document.querySelector(".btn9");
                element9.classList.add("btn-light");
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
                console.log("white wins");
                this.setState({
                  winner: true,
                  whiteScore: this.state.whiteScore + 1
                });
                this.setState({ play: 1 });
                var resBox = document.getElementById("res");
                resBox.innerHTML = "<h3> White Wins</h3>";
              } else if (this.state.count > 7) {
                console.log("Match Draew");
                this.setState({ draw: true });
                var resBox = document.getElementById("res");
                resBox.innerHTML = "<h3> Match Draw</h3>";
              }
            }
          }
        } else {
          this.setState({ play: 1 });
          console.log("count up ie 9 in black draw match");
          this.setState({ draw: true });
          var resBox = document.getElementById("res");
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
                var element1 = document.querySelector(".btn1");
                element1.classList.add("btn-dark");
              } else if (value == 2) {
                arr[0][1] = 1;
                console.log(arr);
                var element2 = document.querySelector(".btn2");
                element2.classList.add("btn-dark");
              } else if (value == 3) {
                arr[0][2] = 1;
                console.log(arr);
                var element3 = document.querySelector(".btn3");
                element3.classList.add("btn-dark");
              } else if (value == 4) {
                arr[1][0] = 1;
                console.log(arr);
                var element4 = document.querySelector(".btn4");
                element4.classList.add("btn-dark");
              } else if (value == 5) {
                arr[1][1] = 1;
                console.log(arr);
                var element5 = document.querySelector(".btn5");
                element5.classList.add("btn-dark");
              } else if (value == 6) {
                arr[1][2] = 1;
                console.log(arr);
                var element6 = document.querySelector(".btn6");
                element6.classList.add("btn-dark");
              } else if (value == 7) {
                arr[2][0] = 1;
                console.log(arr);
                var element7 = document.querySelector(".btn7");
                element7.classList.add("btn-dark");
              } else if (value == 8) {
                arr[2][1] = 1;
                console.log(arr);
                var element8 = document.querySelector(".btn8");
                element8.classList.add("btn-dark");
              } else if (value == 9) {
                arr[2][2] = 1;
                console.log(arr);
                var element9 = document.querySelector(".btn9");
                element9.classList.add("btn-dark");
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
                var resBox = document.getElementById("res");
                resBox.innerHTML = "<h3> Black Wins</h3>";
                this.setState({
                  winner: true,
                  blackScore: this.state.blackScore + 1
                });
                this.setState({ play: 1 });
              } else if (this.state.count > 7) {
                console.log("Match Draew");
                this.setState({ draw: true });
                var resBox = document.getElementById("res");
                resBox.innerHTML = "<h3> Match Draw</h3>";
              }
            }
          }
        } else {
          this.setState({ play: 1 });
          console.log("count up ie 9 in black, match draw");
          this.setState({ draw: true });
          var resBox = document.getElementById("res");
          resBox.innerHTML = "<h3> Match Draw </h3>";
        }
      }
    }
  }

  resetButtonComponent = () => {
    if (this.state.winner || this.state.draw) {
      return (
        <Button className="btn btn-primary" onClick={this.reset}>
          Reset
        </Button>
      );
    }
  };

  reset = () => {};

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
        <div className="game col-10 col-xs-4 col-sm-5 col-lg-4 offset-1 offset-xs-3 offset-sm-3 offset-lg-4 p-5 mt-5">
          <div>
            <Button className="btn1" onClick={this.play} value={1}></Button>
            <Button className="btn2" onClick={this.play} value={2}></Button>
            <Button className="btn3" onClick={this.play} value={3}></Button>
          </div>
          <div>
            <Button className="btn4" onClick={this.play} value={4}></Button>
            <Button className="btn5" onClick={this.play} value={5}></Button>
            <Button className="btn6" onClick={this.play} value={6}></Button>
          </div>
          <div>
            <Button className="btn7" onClick={this.play} value={7}></Button>
            <Button className="btn8" onClick={this.play} value={8}></Button>
            <Button className="btn9" onClick={this.play} value={9}></Button>
          </div>
        </div>
        {/* <div className="contactDetails">
          <h1>
            <a
              href="https://www.linkedin.com/in/rishi-singh-b2226415b/"
              className="link"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/rishi-singh26" className="link">
              <FaGithubSquare />
            </a>
            <a href="https://codepen.io/rishisingh-26/" className="link">
              <FaCodepen />
            </a>
          </h1>
        </div> */}
        <br />
        <div className="col-8 offset-2" id="res"></div>
        <div>{this.resetButtonComponent}</div>
      </div>
    );
  }
}

export default App;
