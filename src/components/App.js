import React, {Component} from 'react';
import { connect } from 'react-redux'

// ここで読んだものがプロップスに入る
import { incre, decre } from '../actions'

class App extends Component {
    // アクションが起こってから、レンダーが実行
    // つまり、アクションで状態が変化されてからレンダー
    render() {
        const props = this.props

        return (
            <React.Fragment>
                <div>{ props.value }</div>
                <button onClick={props.incre}>+1</button>
                <button onClick={props.decre}>-1</button>
            </React.Fragment>
        )
    }
}

// ステイトの状態から、このコンポーネントのプロップスにする
// 状態のトップレベルのステイト引数
//
const mapStateToProps = (state) => ({value: state.count.value})

// レデューサーに状態変化をさせる
const mapDispatchToProps = (dispatch) => {
    return {
        incre: () => dispatch(incre()),
        decre: () => dispatch(decre()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
