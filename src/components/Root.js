import React, { Component, Fragment } from 'react';
import { NavBar, Header, Footer } from './layout';
import Container from './Container';
import ClickItem from './ClickItem';
import data from '../data.json';

class Root extends Component {

  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  render() {
  return(
    <Fragment>
      <NavBar title="Wacky Races Clicky Game" score={this.state.score} topScore={this.state.topScore}/>
      <Header />
      <Container>
        {/*
        {this.state.data.map(item => (
          <ClickItem
            key={item.id}
            id={item.id}
            shake={!this.state.score && this.state.topScore}
            handleClick={this.handleItemClick}
            image={item.image}
          />
        ))}
        */}
      </Container>
      <Footer />
    </Fragment>
    );
  }
}

export default (Root);