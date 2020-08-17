import React from "react";
import { Button, Image, Divider, Header, Icon, Grid } from "semantic-ui-react";
import moment from "moment"

import Comments from "./comment.js";
import Buttons from "./buttons.js"
import kenshi from "./straysheep.jpg";

function App() {
  return (
    <div style = {{backgroundColor : "black"}}>
      <Grid centered>
        <Grid.Row>
          <Image src={kenshi} centered style={{ width: 800, height: 800 }} />
        </Grid.Row>
        <Grid.Row>
          <Buttons />
        </Grid.Row>
      </Grid>
      <br />

      <Divider horizontal>
        <Header as="h4" style = {{color : "white"}}>
          <Icon name="comment alternate" />
          의견란
        </Header>
      </Divider>

      <Comments />
      <Divider horizontal>
        <Header as="h4" style = {{color : "white"}}>
          <Icon name="recycle" style = {{color : "white"}} />
          Connect
        </Header>
      </Divider>
      <br />
      <div>
        <Grid centered>
          <Button circular color="facebook" icon="facebook"
          onClick = {()=>alert("준비중입니다.")} />
          <Button circular color="twitter" icon="twitter"
          onClick = {()=>window.open("https://twitter.com/home")} />
          <Button
           circular
            color="youtube"
             icon="youtube"
              onClick = {()=>window.open("https://www.youtube.com/watch?v=EDBYFsbjZ9I")}/>
          <Button circular color="google plus" icon="google plus"
          onClick = {()=>alert("준비중입니다.")} />
        </Grid>
      </div>
    </div>
  );
}

export default App;
