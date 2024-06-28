import React from "react";
import "./Form.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaRegTrashAlt } from "react-icons/fa";

function Address() {
  return (
    <div className="flex">
      <Form>
        <div className="flex space-between">
          <h2>Shop Addresses 1 </h2>
          <FaRegTrashAlt />
        </div>

        <div className="flex full direction-column">
          <Form.Group className="mb-3 form-input-mid" controlId="formBasicText">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address Line 1"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3 form-input-mid" controlId="formBasicText">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address Line 2"
              className="radius"
            />
          </Form.Group>
        </div>

        <div className="flex full space-between">
          <Form.Group
            className="mb-3 form-input-sm w1"
            controlId="formBasicText"
          >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" className="radius" />
          </Form.Group>

          <Form.Group
            className="mb-3 form-input-sm w1"
            controlId="formBasicText"
          >
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" className="radius" />
          </Form.Group>

          <Form.Group
            className="mb-3 form-input-sm w1"
            controlId="formBasicText"
          >
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Postal Code"
              className="radius"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 form-input-sm w2"
            controlId="formBasicText"
          >
            <Form.Label>Shop Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Shop Location"
              className="radius"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 form-input-sm w1"
            controlId="formBasicText"
          >
            <Form.Label>Get</Form.Label>
            <Form.Control
              type="text"
              placeholder="Get Coordinates"
              className="radius"
            />
          </Form.Group>
        </div>
        <div className="flex flex-column">
          <div className="flex" style={{ width: "100%" }}>
            <Form.Group
              className="mb-3 form-input-mid"
              controlId="formBasicText"
            >
              <Form.Label>Comments</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add your comment (Optional)"
                className="radius"
              />
            </Form.Group>
          </div>
          <div className="flex">
            <Button variant="primary" type="submit">
              Next
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Address;
