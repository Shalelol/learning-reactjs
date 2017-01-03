import React from 'react';

const App = React.createClass({
  render() {
      return <Button>I <Heart /> React</Button>
  }
})

const Button = (props) => <button>{props.children}</button>

const Heart = React.createClass({
  render(){
    return <span>&hearts;</span>
  }
});

module.exports = App;
