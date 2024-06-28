import React, { useState, useEffect } from "react";
import "./ShopList.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const ShopList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://bloom.realgrowsoft.com/merchant/getAll/DRAFT", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGJsb29tLmNvbSIsImlhdCI6MTcxOTU3NDE2MSwiZXhwIjoxNzIwMTc4OTYxfQ.UDGOH2TEiea46UGYqXKYovxd6nSVHLDFnyMwwNSm106-OW9yGRANnOO1-cCgLCwalkSL_pzTMI4_w8gi1W8OCg",
        },
      })
      .then((response) => {
        setData(response.data.content);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  console.log(data);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="base-container cards-layer">
      <div className="flex align-center">
        <div style={{ padding: "2rem 12rem 2rem 0rem" }}>
          <h3
            style={{
              color: "rgb(255, 90, 95)",
              fontWeight: "bold",
            }}
          >
            Shop List
          </h3>
        </div>
        <div style={{ padding: "2rem 0rem 2rem 12rem" }}>
          <Button variant="primary">
            <Link
              to="/create"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              Create
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex cards-container">
        {data &&
          data?.map((item) => (
            <div className="item" key={item.id}>
              <Card>
                <Card.Body className="flex space-around">
                  <div className="item">
                    <Card.Text>
                      <span className="bold">Brand Name: </span>
                      {item.brandName}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">Company Name: </span>
                      {item.companyName}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">
                        Company Headquarters Address:{" "}
                      </span>
                      {item.companyHqAddress}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">Office Telephone Number: </span>
                      {item.officeTelNumber}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">Manager Name: </span>
                      {item.managerNameAndSurname}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">Email: </span>
                      {item.email}
                    </Card.Text>
                  </div>

                  <div className="item">
                    <Card.Text>
                      <span className="bold">Manager Telephone Number: </span>
                      {item.managerTelNumber}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">Manager WhatsApp Number: </span>
                      {item.managerWhatsAppNumber}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">Registration Number: </span>
                      {item.registrationNumber}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">
                        Tax Identification Number (DFE):{" "}
                      </span>
                      {item.fiscalNumber}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">Bank Account Number (IBAN): </span>
                      {item.bankAccountNumber}
                    </Card.Text>

                    <Card.Text>
                      <span className="bold">Bank Name: </span>
                      {item.bankName}
                    </Card.Text>
                  </div>
                </Card.Body>

                <div className="flex button-group">
                  <Button variant="primary">Edit details</Button>
                  <Button variant="primary">View Shop</Button>
                </div>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopList;
