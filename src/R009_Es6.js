import React, { Component } from "react";

class R009_Es6 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트'
        var jsString2 = '입니다\n다음 줄입니다.'
        console.log(jsString1 + ' 문자열' + jsString2 + '~');

        var Es6String1 = 'ES6'
        var Es6String2 = '입니다'
        console.log(`${Es6String1} 문자열${Es6String2}!!
____다음 줄입니다`)

        var LongString = "ES6에 추가된 String 함수들입니다.";
        console.log('startsWith: ' + LongString.startsWith("ES6에 추가"));
        console.log('endsWith: ' +LongString.endsWith("함수들입니다."));
        console.log('includes: ' + LongString.includes("추가된 String"));
    }
    
    render() {
        return(
            <h2>[THIS IS ES6 STRING ]</h2>
        )
    }
}

export default R009_Es6;

/*
1. 문자열과 변수를 합치기 위해서는 문자열을 따옴표로 감싸고 +로 연결해야한다.
2. 백틱(`)으로 전체 문자열과 변수를 묶어서 사용한다. 변수는 ${변수명} 형태로 넣는다.
3. startsWith(): 변수 앞에서부터 일치하는 문자열이 있는지 찾는다.
4. endsWith(): 변수 뒤에서부터 일치하는 문자열이 있는지 찾는다.
5. includes(): 앞, 뒤 상관없이 변수에 특정 문자열이 포함되어 있는지 판단하여 true/false를 반환한다.
*/