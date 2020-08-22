import React from "react";

import { Modal, Button, Image, Header } from "semantic-ui-react";

class VisitorsModal extends React.Component {
  render() {
    return (
      <Modal open={this.props.isOpen}>
        <Modal.Header>방명록</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src="/images/avatar/large/rachel.png" wrapped />
          <Modal.Description>
            <Header>Google 로그인 시 등록됩니다.</Header>
            {this.props.visitorsList.map((name) => (
              <p>{`${name}님`} </p>
            ))}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="방문해주셔서 감사합니다!"
            labelPosition="right"
            icon="checkmark"
            onClick={() => this.props.closeModal()}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default VisitorsModal;
