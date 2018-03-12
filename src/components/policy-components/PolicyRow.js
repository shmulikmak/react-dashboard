import React, { Component } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import EditableCell from "./EditableCell";
import "../../css/policy-components/PolicyRow.css";


class PolicyRow extends Component {

    onDelEvent() {
        this.props.onDelEvent(this.props.polic);
    }

    render() {
        return (
            <tr>
                <EditableCell onPolicyTableUpdate={this.props.onPolicyTableUpdate} cellData={{
                    type: "id",
                    value: this.props.polic.id,
                    id: this.props.polic.id
                }} />
                <EditableCell onPolicyTableUpdate={this.props.onPolicyTableUpdate} cellData={{
                    type: "name",
                    value: this.props.polic.name,
                    id: this.props.polic.id
                }} />
                <EditableCell onPolicyTableUpdate={this.props.onPolicyTableUpdate} cellData={{
                    type: "userGroup",
                    value: this.props.polic.userGroup,
                    id: this.props.polic.id
                }} />
                <EditableCell onPolicyTableUpdate={this.props.onPolicyTableUpdate} cellData={{
                    type: "mode",
                    value: this.props.polic.mode,
                    id: this.props.polic.id
                }} />
                <td>
                    <ButtonToolbar>
                        <Button onClick={this.onDelEvent.bind(this)}>X</Button>
                    </ButtonToolbar>
                </td>
            </tr>
        );
    }
}
export default PolicyRow;
