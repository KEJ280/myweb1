import React from "react";
import {
  Image,
  Comment,
  Form,
  Button,
  Header,
  Icon,
  Grid,
} from "semantic-ui-react";
import moment from "moment";

import human from "./human.png";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Avatar src={human} />
        <Comment.Author as="a" style={{ color: "white", marginLeft: "10px" }}>
          {detail.info.userName}
        </Comment.Author>
        <Comment.Metadata>
          <div style={{ color: "white", marginLeft: "5px" }}>
            {detail.info.time}
          </div>
        </Comment.Metadata>
        <Comment.Text style={{ color: "white", marginLeft: "50px" }}>
          {detail.info.content}
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action style={{ color: "white" }}>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      imputTime: "",
      userName: "",
      commentsList: [],
    };
  }

  render() {
    console.log(this.state.commentsList);
    return (
      <Comment.Group>
        <Header as="h3" dividing style={{ color: "white" }}>
          Comments
        </Header>

        {this.state.commentsList.map((comments) => (
          <SingleComment info={comments} />
        ))}

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글을 입력해주세요"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() => {
              if (this.state.inputContent != "") {
                this.setState((prevState) => {
                  return {
                    commentsList: [
                      ...prevState.commentsList,
                      {
                        content: this.state.inputContent,
                        time: moment().format(
                          "YYYY년 MM월 DD일 HH시 mm분 ss초"
                        ),
                        userName: this.props.userName,
                      },
                    ],
                    inputContent: "",
                  };
                });
              } else {
                alert("내용을 입력해 주세요");
              }
            }}
          />
        </Form>

        <br />
      </Comment.Group>
    );
  }
}

export default Comments;
