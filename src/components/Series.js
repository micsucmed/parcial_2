import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage } from "react-intl";

import Serie from "./Serie";
import SerieGraph from "./SerieGraph";

function Series({ url }) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const seriesDummy = [
      {
        id: 1,
        name: "Loading...",
        channel: "Loading...",
        description: "Loading...",
      },
    ];

    if (!navigator.onLine) {
      if (localStorage.getItem("series") === null) {
        setSeries(seriesDummy);
      } else {
        console.log(JSON.parse(localStorage.getItem("series")));
        setSeries(JSON.parse(localStorage.getItem("series")));
      }
    } else {
      const URL = url;
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setSeries(data);
          localStorage.setItem("series", JSON.stringify(data));
        });
    }
  }, [url]);

  const renderTable = () => {
    return (
      <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>
                <FormattedMessage id="Name" />
              </th>
              <th>
                <FormattedMessage id="Channel" />
              </th>
              <th>
                <FormattedMessage id="Description" />
              </th>
            </tr>
          </thead>
          <tbody>
            {series.map((serie, i) => {
              return <Serie key={i} serie={serie} />;
            })}
          </tbody>
        </Table>
      </Col>
    );
  };

  return (
    <Container fluid>
      <Row>{renderTable()}</Row>
      <Row>
        <Container>
          <h2>
            <FormattedMessage id="Seasons" />
          </h2>
          <SerieGraph data={series} />
          <h2>
            <FormattedMessage id="Figure" />
          </h2>
        </Container>
      </Row>
    </Container>
  );
}

export default Series;
