import React from 'react';

// class App extends Component {
//   render() {
//     return <div>!!!! <code>src/App.js</code> and save to reload.</div>
//   }
// }

// App クラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//         <React.Fragment>
//             <label htmlFor="bar">bar</label>
//             <input type="text" onClick={()=>{console.log("hi")}} />
//         </React.Fragment>
//     )
//   }
// }

// 関数コンポーネント
const App =() => {
    return (
        <div>
            <Cat />
            <Cat />
            <Cat />
            <Cat />
        </div>
    )
}

const Cat = () => {
    return (<p>me</p>)
}
export default App;