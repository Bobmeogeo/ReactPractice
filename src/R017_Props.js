import React, { Component } from "react";

class R017_Props extends Component {
    render() {
        // 2. this.props. 뒤에 상위 컴포넌트(App.js)에서 전달받은 props 변수명을 붙이면 해당 데이터를 사용가능
        let props_value = this.props.props_val; 
        props_value += ' from App.js'
        return(
            <div>{props_value}</div>
        )
    }
}

export default R017_Props;

/*
1. App.js 의 line 10 <Props props_val ="THIS IS PROPS" /> 의미
App.js 의 하위 컴포너트 R017_Props에 전달할 props 변수(props_val)에 값(THIS IS PROPS)을 저장한다.
2. 데이터를 수정해야 할 경우, props 자체가 아닌 컴포넌트 내부 변수(props_value)에 옮겨 가공한다.
*/