import React, {Component} from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component{
    render() { // render()함수 내에서 지역변수를 선언해 props로 전달될 값을 할당한다.
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props
        return(
            <div style={{padding: '0px'}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>ObjectProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )
    }
}

R018_PropsDatatype.protoTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype;

// 자식 컴포넌트에서 props에 대한 자료형을 선언해 놓으면 부모 컴포넌트에서 넘어오는 props 자료형과 비교한다.