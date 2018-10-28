import React, {Component} from 'react';
import PropTypes from 'prop-types'

// 関数コンポーネント
const App =() => {
    return (
        <Counter></Counter>
    )
}

class Counter extends Component {
    constructor(props) {　//初期
        super(props) //　親クラスで初期化処理をする
        this.state = { count: 0 } // 初期化時に対してオブジェクトが作成される
    }

    handlePlusButton = () => {
        this.setState({count: this.state.count +1})

    }

    handleMinusButton = () => {
        this.setState({count: this.state.count -1})
    }

    // stateのオブジェクトを作成してから、レンダーが実行される
    render() {
        return (
            <React.Fragment>
                <div>{ this.state.count }</div>
                <button onClick={this.handlePlusButton}>+1</button>
                <button onClick={this.handleMinusButton}>-1</button>
            </React.Fragment>
        )
    }
}

export default App