import React from 'react';
import {Image, Comment, Form, Button, Header} from 'semantic-ui-react'

import kenshi from "./straysheep.jpg"

function App() {
  return (

<div>
    <Image src = {kenshi} centered style = {{"width": 800, "height":800}}/>
  </div>
  );
}


export default App;
