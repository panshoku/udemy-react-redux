import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return <div>!!!! <code>src/App.js</code> and save to reload.</div>
//   }
// }

class App extends Component {
  render() {
      const greeting = "hello"
      const dom = <h1 className="foo">{greeting}</h1>
    // return dom
    return (
        <React.Fragment>
            <label htmlFor="bar">bar</label>
            <input type="text" onClick={()=>{console.log("hi")}} />
        </React.Fragment>
    )
  }
}

export default App;