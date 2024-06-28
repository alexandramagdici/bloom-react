import React from "react";
import "./Form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Address from "./Address";

function FormElements() {
  return (
    <div className="form-wrapper">
      <div className="flex space-evenly full">
        <Form>
          <Form.Group
            className="mb-3 form-input-sm radius"
            controlId="formBasicText"
          >
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brand Name"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>CompanyHqAddress</Form.Label>
            <Form.Control
              type="text"
              placeholder="CompanyHqAddress"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Manager Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Manager Name"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Manager Telephone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Manager Telephone Number"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Registration Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Registration Number"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Bank Account Number (IBAN)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Bank Account Number (IBAN)"
              className="radius"
            />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>

        <Form>
          <Form.Group className="mb-3 form-input-sm" controlId="formBasicText">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Office Telephone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Office Telephone Number"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" className="radius" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Manager WhatsApp Number</Form.Label>
            <Form.Control
              type="password"
              placeholder="Manager WhatsApp Number"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Tax Identification Number (DFE)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tax Identification Number (DFE)"
              className="radius"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Bank Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Bank Name"
              className="radius"
            />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </div>
      <div className="flex space-around full">
        <Address />
      </div>
    </div>
  );
}

export default FormElements;
