import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    highCount: 0,
    clickArray: []
  };

  handleClick = id => {
    let newClick = this.state.clickArray;
    let newFriends = friends;
    let clicked = newClick.includes(id);
    // console.log(clicked); //debug
    if (this.state.count > this.state.highCount) {
      this.setState({highCount: this.state.count});
    }
    clicked ? (
      this.setState({count: 0 }), 
      newClick = []
    ) : (
      this.setState({count: this.state.count + 1 }), 
      newClick.push(id)
    );

    // randomize the friends array
    newFriends = this.shuffle(newFriends);
    // Set this.state.friends equal to the new friends array
    //check to see if that id has been selected before
    // if yes, check if count is greater than highCount and replace if it is.
    // if not, then increment count
    // whatever the case always randomize the array 
    this.setState({ friends: newFriends });
    this.setState({ clickArray: newClick });
  };

  shuffle = (originalArray) => {
    let array = [].concat(originalArray);
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar count={this.state.count} highCount={this.state.highCount}/>
      <Title/>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
