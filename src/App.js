import React from 'react';

const App = React.createClass({
  render() {
      return <Title text="Test 123456"/>
  }
})

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if(!(propName in props))
      return new Error(`Missing ${propName}`);

    if(props[propName].length < 6)  
      return new Error(`${propName} was too short`)
  }
}

module.exports = App;
