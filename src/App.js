import React from 'react';

const App = React.createClass({
  getInitialState(){
    return {
      text: 'this is the state text',
      cat: 0
    }
  },
  update(e){
    this.setState({
      text: e.target.value
    })
  },
  render(){
    let text = this.props.text;
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.text} - {this.state.cat}</h1>
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
