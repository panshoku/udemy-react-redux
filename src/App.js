import React from 'react';
import PropTypes from 'prop-types'

// 関数コンポーネント
const App =() => {
    const profiles =[
        { name: "taro", age: 10},
        { name: "hana", age: 11},
        { name: "no"},
    ]
    return (
        <div>
        {
            // 配列.map()：全ての要素を呼び出す。ループ的な
            // 配列.map(x => x*2) : 配列に入ってる要素がxに渡されて=>の処理をする
            profiles.map((profile, index) => {
                return <User name={profile.name} age={profile.age} key={index}/>
            })
        }
            {/*
                コンポーネントの属性。
                コンポーネントに対して属しているもの。
                Userコンポーネントに対して、taroというprops.thisができた。
                Userの引数にpropsが使える。taroが入る。
            */}
        </div>
    )
}

const User = (props) => {
    return (<p>i am {props.name}, {props.age}</p>)
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
}

User.defaultProps = {
    age: 1
}

export default App;