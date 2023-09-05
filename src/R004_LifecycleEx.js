// 004. render() 사용

import React, { Component } from "react";

class R004_LifecycleEx extends Component {
    render(){
        console.log('3.render Call');
        return(
            <h2>[004. render()]</h2>
        )
    }
}

export default R004_LifecycleEx;

// render()는 return되는 html 형식의 코드를 화면에 그려주는 함수