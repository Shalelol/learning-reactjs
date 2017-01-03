import React from 'react';

const App = React.createClass({
  render(){
    let text = this.props.text;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  },
  propTypes: {
    text: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },
  defaultProps: {
    text: 'this is the default text'
  }
})

// const App = () => <h1>hello stateless</h1>

module.exports = App;
