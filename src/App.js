import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: ++this.state.val });
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('compontentDidMount');
  }
  componentWillUnMount(){
    console.log('componentWillUnMount');
  }
  componentDidUnMount(){
    console.log('componentDidUnMount');
  }
  render () {
    console.log('render');
    return (
      <button onClick={this.update}>{this.state.val}</button>
    );
  }
}

class Wrapper extends React.Component{
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'));
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
