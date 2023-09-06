// 001. jsx에 html 적용하기, 002. jsx에 css 적용하기

import React from "react";
import './App.css' //css 적용
import LifecycleEx from "./R008_LifecycleEx";

function App(){
  return(
    <div>
      <h1>Start React 200!</h1>
      <p>001. HTML 적용하기</p>
      <p>002. css 적용하기</p>
      <LifecycleEx
      prop_value = 'FromApp.js'
      />
    </div>
  );
}

export default App;