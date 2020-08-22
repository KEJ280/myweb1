import React from "react";
import firebase from "firebase";
import {
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  Input,
  Menu,
} from "semantic-ui-react";
import moment from "moment";

import auth from "./fb.js";
import Comments from "./comment.js";
import Buttons from "./buttons.js";
import VisitorsModal from "./modal.js";
import dog from "./씩씩이2.jpg";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "방문자",
      isModalOpen: false,
      visitors: [
        "등유",
        "9696",
        "hand333",
        "abcdssdsd",
        "fjfjfjfjfj",
        "ddddddddddddddddddddddddd",
      ],
    };
  }

  toggleModal = () =>
    this.setState((prevState) => {
      return { isModalOpen: !prevState.isModalOpen };
    });

  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <VisitorsModal
          isOpen={this.state.isModalOpen}
          closeModal={this.toggleModal}
          visitorsList={this.state.visitors}
        />
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "15px" }}>
          Welcome!
        </h1>
        <Menu inverted widths={3}>
          <Menu.Item>Menu</Menu.Item>
          <Menu.Item>{`안녕하세요, ${this.state.userName}님.`}</Menu.Item>
          <Menu.Item
            onClick={() => {
              firebase
                .auth()
                .signInWithPopup(provider)
                .then(function (result) {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                  return user.displayName;
                  // ...
                })
                .then((result) => this.setState({ userName: result }))
                .catch(function (error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                  // ...
                });
            }}
          >
            Google Login
          </Menu.Item>
        </Menu>
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="bullseye" />
            My Artwork
          </Header>
        </Divider>
        <Grid centered>
          <Grid.Row>
            <Image src={dog} centered style={{ width: 500, height: 500 }} />
          </Grid.Row>
          <Grid.Row>
            <Buttons
              openModal={this.toggleModal}
              visitors={this.state.visitors.length}
            />
          </Grid.Row>
        </Grid>
        <br />

        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="comment alternate" />
            의견란
          </Header>
        </Divider>
        <Grid centered columns={3}>
          <Grid.Column>
            <Comments userName={this.state.userName} />
          </Grid.Column>
        </Grid>
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="recycle" style={{ color: "white" }} />
            Connect
          </Header>
        </Divider>
        <br />
        <div>
          <Grid centered>
            <Button
              circular
              color="facebook"
              icon="facebook"
              onClick={() => alert("준비중입니다.")}
            />
            <Button
              circular
              color="twitter"
              icon="twitter"
              onClick={() => window.open("https://twitter.com/home")}
            />
            <Button
              circular
              color="youtube"
              icon="youtube"
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=EDBYFsbjZ9I")
              }
            />
            <Button
              circular
              color="google plus"
              icon="google plus"
              onClick={() => alert("준비중입니다.")}
            />
          </Grid>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default App;
