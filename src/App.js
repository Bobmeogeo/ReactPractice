// 001. jsx에 html 적용하기, 002. jsx에 css 적용하기

import React from "react";
import './App.css'; //css 적용
import PropsDatatype from './R018_PropsDatatype';

function App(){
  return(
    <div>
      <h1>Start React 200!</h1>
      <p>001. HTML 적용하기</p>
      <p>002. css 적용하기</p>
      <PropsDatatype
      String = "react"
      Number = {200}
      Boolean = {1==1}
      Array = {[0, 1, 8]}
      ObjectJson = {{react:"리액트", twohundred:"200"}}
      Function = {console.log("FunctionProps: function!")} 
      />
    </div>
  );
}

export default App;