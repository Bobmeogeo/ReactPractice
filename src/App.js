// 001. jsx에 html 적용하기, 002. jsx에 css 적용하기

import React from "react";
import './App.css' //css 적용
import ImportComponent from "./R003_ImportComponent";
import LifecycleEx from "./R004_Lifecycle";

function App(){
  return(
    <div>
      <h1>Start React 200!</h1>
      <p>001. HTML 적용하기</p>
      <p>002. css 적용하기</p>
      <ImportComponent></ImportComponent>
      <LifecycleEx></LifecycleEx>
    </div>
  );
}

export default App;