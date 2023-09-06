import React, { Component } from "react";

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFropProps Call :' +props.prop_value);
        return {tmp_state: props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state :' + this.state.tmp_state);
        this.setState({tmp_state2: true});
    }

    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' +state.tmp_state2)
    }

    render() {
        console.log('3. render Call');
        return(
            <h2>[THIS IS shouldComponentUpdate FUFNCTION]</h2>
        )
    }
}

export default R008_LifecycleEx;

/*
1. componentDidMount() 함수는 '생성' 단계의 생명주기 함수 중 가장 마지막으로 실행된다.
2. tmp_state2라는 state변수에 true라는 boolean 유형의 데이터를 셋팅,setState()함수는 변수의 선언과 초기화를 동시에 실행.
3. line 18에서 state의 변경이 발생 '변경' 단계의 생명주기 함수 shouldComponentUpdate()가 실행된다.
4. shouldComponentUpdate()는 boolean 유형의 데이터를 반환하는데 return 값이 true일 경우에 render() 함수를 한 번 더 호출.
*/