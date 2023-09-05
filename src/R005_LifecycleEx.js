import React, { Component} from "react";

class R005_LifecycleEx extends Component{
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. consturctor Call');
    }
    render(){
        console.log('3. render Call');
        return(
            <h2>[THIS IS COUNSTUCTOR FUNCTION]</h2>
        )
    }
}

export default R005_LifecycleEx;

/* 
1. constructor(props)는 생명주기 함수 중 가장 먼저 실행되며, 처음 한 번만 호출됨
2. component 내부에서 사용되는 (state)를 선언하고 부모객체에서 전달받은 변수(props)를 초기화할 때 사용한다.
3. super() 함수는 가장 위에 호출해야한다.
*/
