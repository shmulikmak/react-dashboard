
import React, { Component } from "react";
import { Row, Col, Table, ButtonToolbar, Button, Badge } from "react-bootstrap";
import { overview } from "../mock-data/overview";
import "../css/OverviewSection.css";

class OverviewSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AttacksNumber: 45
        };
    }

    refreshAttacksNumber = () => {
        this.setState({
            AttacksNumber: Math.floor((Math.random() * 100) + 1)
        });
    }

    render() {
        return (
            <Col md={6}>
                <Row className="show-grid">
                    <Col md={12} className="section-title">
                        Overview Section:
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={12}>
                        <div className="number">
                            Attacks number: <Badge>{this.state.AttacksNumber}</Badge>
                        </div>

                        <ButtonToolbar className="danger">
                            <Button bsStyle="danger" onClick={this.refreshAttacksNumber}>Refresh</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={12}>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>user</th>
                                    <th>application</th>
                                    <th>description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {overview.map((item, i) =>
                                    <tr key={i}>
                                        <td>{item.user}</td>
                                        <td>{item.application}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>
        );
    }
};
export default OverviewSection;
