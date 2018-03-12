
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { policy } from "../mock-data/policy";
import PolicyTable from "./policy-components/PolicyTable";
import "../css/PolicySection.css";

class PolicySection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            policy: policy
        };
    }

    handleRowDelet(row) {
        const index = this.state.policy.indexOf(row);
        this.state.policy.splice(index, 1);
        this.setState(this.state.policy);
    };

    handleAddEvent(event) {
        const id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        const policy = {
            id: id,
            name: "",
            userGroup: "",
            mode: ""
        }
        this.state.policy.push(policy);
        this.setState(this.state.policy);
    }

    handlePolicyTable(event) {
        const item = {
            id: event.target.id,
            name: event.target.name,
            value: event.target.value
        };
        
        const newPolicy = this.state.policy.map((row) => {
            for (let key in row) {
                if (key == item.name && row.id == item.id) {
                    row[key] = item.value;
                }
            }
            return row;
        });
        this.setState({ policy: newPolicy });    
    };

    render() {
        return (
            <Col md={6}>
                <Row className="show-grid main-title">
                    <Col md={12} className="section-title">
                        Policy Section:
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={12}>

                        <PolicyTable
                            onPolicyTableUpdate={this.handlePolicyTable.bind(this)}
                            onRowAdd={this.handleAddEvent.bind(this)}
                            onRowDel={this.handleRowDelet.bind(this)}
                            policy={this.state.policy}
                        />

                    </Col>
                </Row>
            </Col>
        );
    }
};
export default PolicySection;





