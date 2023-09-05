import React, { Component } from "react";

class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDrivedStateFromProps Call :' +props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    render() {
        console.log('3. render Call');
        return(
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default R006_LifecycleEx;

/*
1. getDerivedStateFromProps(props, state) 함수는 constuctor()함수 다음으로 실행된다.
2. 컴포넌트가 새로운 prop을 받게 되었을 때 state를 변경해준다.
3. App.js 에서 전달한 prop_value라는 변수를 props.prop_value로 접근해서 값을 가져올 수 있다.
*/