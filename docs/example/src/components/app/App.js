import React from 'react';
import Output from '../../../../../index';
import './App.css';
const data ={
  "time" : 1638146432885,
  "blocks" : [
      {
          "id" : "zqZd0lg-5j",
          "type" : "code",
          "data" : {"code" : "sadfsafsaxd"}
      },
      {
          "id" : "az5PnFJ67R",
          "type" : "header",
          "data" : {
              "text" : "Editor.js",
              "level" : 2
          }
      }
  ],
  "version" : "2.22.2"
}

const App = () => (
  <div className='App'>
    <header>Editor.js React Renderer</header>
    <Output data={data}/>
  </div>
);

export default App;
