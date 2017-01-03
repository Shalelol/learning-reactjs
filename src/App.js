import React from 'react';

const App = React.createClass({
  getInitialState(){
    return {
      text: 'this is the state text'
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
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <h1>{this.state.text}</h1>
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

const Widget = (props) => <input type="text" onChange={props.update} />

// const App = () => <h1>hello stateless</h1>

module.exports = App;
