import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function RoomViewEditsModal(props) {
  return (
    <Modal>
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Form></Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RoomViewEditsModal;